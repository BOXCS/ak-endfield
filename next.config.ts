import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ak-endfield",      // ganti my-app sesuai nama repo
  assetPrefix: "/ak-endfield",
};


export default nextConfig;
