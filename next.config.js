/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "c.tenor.com",
      "archive.triblive.com",
      "d3h9ln6psucegz.cloudfront.net",
      "s.yimg.com",
      "media.istockphoto.com",
    ],
  },
};

module.exports = nextConfig;
