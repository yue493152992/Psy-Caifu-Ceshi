import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 启用静态导出模式
  images: {
    unoptimized: true,  // Cloudflare Pages 需要这个
  },
};

export default nextConfig;
