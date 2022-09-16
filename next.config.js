/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["c.tenor.com"],
  },
};

module.exports = nextConfig;
