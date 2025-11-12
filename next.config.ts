import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image-loader.ts',
    // Disable image optimization since we're using pre-optimized images
    unoptimized: false, // Keep false to use custom loader
  },
};

export default nextConfig;
