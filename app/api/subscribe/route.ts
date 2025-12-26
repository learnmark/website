import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate data
    if (!data.email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }
    const filePath = path.join(dataDir, 'newsletter_subscriptions.json');
    
    let subscriptions = [];
    
    // Read existing submissions if file exists
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      try {
        subscriptions = JSON.parse(fileContent);
      } catch (error) {
        console.error('Error parsing JSON file:', error);
        // If parsing fails, start with empty array
        subscriptions = [];
      }
    }

    // Check if email already exists
    const emailExists = subscriptions.some((sub: any) => sub.email === data.email);
    if (emailExists) {
        return NextResponse.json(
            { message: 'Email already subscribed' },
            { status: 409 }
        );
    }

    // Add new submission with timestamp
    const newSubscription = {
      id: Date.now(),
      subscribedAt: new Date().toISOString(),
      email: data.email
    };
    
    subscriptions.push(newSubscription);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(subscriptions, null, 2));

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
