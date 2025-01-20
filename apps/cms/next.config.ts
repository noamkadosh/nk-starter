import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // eslint-disable-next-line @typescript-eslint/require-await
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin",
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);
