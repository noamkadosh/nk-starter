import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Use "standalone" when using docker"
  // output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
