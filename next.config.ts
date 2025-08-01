import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vidres.ec",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["vidres.ec"],
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
