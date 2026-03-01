import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://images.pexels.com/photos/**?auto=compress&cs=tinysrgb&w=600'),
    ],
  }
};

export default nextConfig;