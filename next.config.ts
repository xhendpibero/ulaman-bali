import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
      {
        protocol: "https",
        hostname: "ulaman.cdn.prismic.io",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@tanstack/react-query"],
  },
};

export default nextConfig;
