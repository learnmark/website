/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.BUILD_OUTPUT_MODE === 'export' ? 'export' : 'standalone',
    images: {
        unoptimized: process.env.BUILD_OUTPUT_MODE === 'export',
    },
};

export default nextConfig;
