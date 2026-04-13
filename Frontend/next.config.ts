import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/conlan2.github.io",
  assetPrefix: "/conlan2.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
