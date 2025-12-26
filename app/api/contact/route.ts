import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate data (basic validation)
    if (!data.firstName || !data.lastName || !data.email) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }
    const filePath = path.join(dataDir, 'contact_submissions.json');
    
    let submissions = [];
    
    // Read existing submissions if file exists
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      try {
        submissions = JSON.parse(fileContent);
      } catch (error) {
        console.error('Error parsing JSON file:', error);
        // If parsing fails, start with empty array
        submissions = [];
      }
    }

    // Add new submission with timestamp
    const newSubmission = {
      id: Date.now(),
      submittedAt: new Date().toISOString(),
      ...data
    };
    
    submissions.push(newSubmission);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    return NextResponse.json(
      { message: 'Submission received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
