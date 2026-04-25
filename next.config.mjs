/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "n9ks10qx-3000.inc1.devtunnels.ms/"
      ]
    }
  }
};

export default nextConfig;
