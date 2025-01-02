import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allow Sanity's CDN for images
  },
};

export default nextConfig;
