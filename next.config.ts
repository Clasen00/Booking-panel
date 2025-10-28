import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cinemas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
