// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disable Turbopack, use Webpack instead
  },
};

module.exports = nextConfig;
