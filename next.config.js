/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'interview.platdev.net',
        pathname: '/**',
      },
    ],
    deviceSizes: [360, 450, 828, 1080, 1200, 1920],
  },
};

module.exports = nextConfig;
