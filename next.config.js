/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.cache = {
      type: "filesystem",
      compression: "gzip", // 캐시 압축을 활성화
    };
    return config;
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};
