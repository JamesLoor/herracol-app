/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
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

module.exports = nextConfig;
