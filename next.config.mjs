// @ts-check
// import { loadEnvConfig } from "@next/env";

export default async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: process.env.NEXT_PUBLIC_PINATA_GATEWAY_DOMAIN ?? "",
        },
      ],
    },
  };
  return nextConfig;
};
