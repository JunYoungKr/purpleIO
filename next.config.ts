import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"],
  },
};

export default nextConfig;
