// This file is required for Next.js to work properly.
const isDev = process.env.NODE_ENV !== 'production';

const config = {
  reactStrictMode: true,
  swcMinify: true,
};

if (isDev) {
  // In development, proxy /api to the backend service in the docker network
  config.rewrites = async () => [
    {
      source: '/api/:path*',
      destination: 'http://backend:8000/api/:path*',
    },
  ];
} else {
  // For production static export
  config.output = 'export';
}

module.exports = config;
