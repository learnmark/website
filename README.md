# Learnmark Website

This is the official website for Learnmark, built with [Next.js 16](https://nextjs.org/) and [Tailwind CSS v4](https://tailwindcss.com/).

## Features

- **Modern Tech Stack**: Built on Next.js 16 (App Router) and React 19.
- **Responsive Design**: Fully responsive UI using Tailwind CSS v4 and Headless UI.
- **Dynamic Components**: Reusable components for Header, Footer, Features, CTA, etc.
- **API Routes**:
  - `/api/contact`: Handles contact form submissions.
  - `/api/subscribe`: Handles newsletter subscriptions.
  - Data is currently stored locally in JSON files (`data/`).
- **Dockerized**: Includes optimized `Dockerfile` for production deployment.

## Project Structure

```
├── app/                # App Router pages and API routes
│   ├── api/            # Backend API endpoints
│   ├── about/          # About page
│   ├── letscrum/       # Product page
│   ├── solutions/      # Solution pages
│   └── ...
├── components/         # Reusable React components
├── data/               # Local storage for form submissions (JSON)
├── public/             # Static assets
└── ...
```

## Getting Started

### Local Development

1.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

2.  Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser.

### Docker Build

To build and run the application using Docker:

1.  Build the image:

    ```bash
    docker build -t learnmark-website .
    ```

2.  Run the container (with data persistence):

    ```bash
    docker run -p 3000:3000 -v $(pwd)/data:/app/data learnmark-website
    ```

    *Note: Mounting the volume ensures that contact form submissions and newsletter subscriptions are saved to your local `data` directory and persist across container restarts.*

## Deployment

The application is optimized for deployment on Vercel or any container orchestration platform (Kubernetes, ECS, etc.) using the provided Dockerfile.

**Important Note for Vercel/Serverless:**
The current implementation uses the local filesystem (`/data`) to store form submissions. This **will not work** on serverless platforms like Vercel where the filesystem is ephemeral. For serverless deployments, please update the API routes (`app/api/*`) to use an external database (e.g., MongoDB, PostgreSQL) or an email service.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
