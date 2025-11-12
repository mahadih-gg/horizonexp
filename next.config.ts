import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, 
  }, 
  // slow loading due to this unoptimizaiton
};

export default nextConfig;
