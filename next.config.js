/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["admin.7c-kh.com", "127.0.0.1", "localhost"],
    unoptimized: true,
  },
  env: {
    API_URL: "https://admin.7c-kh.com",
  },
};

module.exports = nextConfig;
