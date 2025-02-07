/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sakuja.me',
                pathname: '/**',
            },
        ],
    },
    // Domain configuration
    env: {
        NEXT_PUBLIC_SITE_URL: 'https://sakuja.me',
    },

};


export default nextConfig;