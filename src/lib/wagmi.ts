import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { alchemyKey, initialChain, walletConnectProjectId } from "./constants";
import { sepolia } from "viem/chains";
import { http } from "viem";

export const config = getDefaultConfig({
  appName: "Nezzar's AA Sandbox",
  projectId: walletConnectProjectId,
  chains: [initialChain],
  transports: {
    [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`),
  },
  ssr: true, // If your dApp uses server side rendering (SSR)
});
