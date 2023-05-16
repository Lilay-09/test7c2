/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["admin.7c-kh.com", "127.0.0.1", "localhost"],
    unoptimized: true,
  },
  env: {
    BASE_API_URL1: process.env.BASE_API_URL,
    BASE_API_URL_MAIN1: process.env.BASE_API_URL_MAIN,
  },
};

module.exports = nextConfig;
