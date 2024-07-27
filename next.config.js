/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.4',
        port: '8083',
        pathname: '/storage/lagamar/**',
      },
    ],
  },
};

module.exports = nextConfig;
