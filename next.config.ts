import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "horizonexp.com",
        port: "",
        pathname: "/**",
      },
    ],
  }

};

export default nextConfig;
