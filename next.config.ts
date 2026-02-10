import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // ini sudah menghasilkan static HTML
  images: { unoptimized: true },
  basePath: "/ak-endfield",
  assetPrefix: "/ak-endfield",
};

export default nextConfig;
