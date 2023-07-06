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
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Referrer-Policy",
  //           value: "origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
