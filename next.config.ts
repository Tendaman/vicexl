import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,   // Ignores TypeScript errors during production builds
  },
  eslint: {
    ignoreDuringBuilds: true,  // Ignores ESLint errors during production builds
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
