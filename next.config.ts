import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"], // ✅ 여기에 도메인 추가
  },
};

export default nextConfig;
