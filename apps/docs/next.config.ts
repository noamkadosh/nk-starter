import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  // Use "standalone" when using docker"
  // output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(config);
