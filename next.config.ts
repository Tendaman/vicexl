import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images: {
    domains: [
      "utfs.io",
      "uploadthing.com",
      "img.clerk.com"],
  },
  env: {
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
  },
};

export default nextConfig;
