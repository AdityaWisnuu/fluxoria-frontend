import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Polyfill indexedDB for server-side
      config.resolve.alias = {
        ...config.resolve.alias,
        "fake-indexeddb": false,
      };
    }

    // Externalize problematic packages
    config.externals = [...(config.externals || []), "fake-indexeddb"];

    return config;
  },
  serverComponentsExternalPackages: [
    "@rainbow-me/rainbowkit",
    "wagmi",
    "@walletconnect/ethereum-provider",
  ],
};

export default nextConfig;
