import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { alchemyKey, initialChain, walletConnectProjectId } from "./constants";
import { localhost, optimismSepolia, sepolia } from "viem/chains";
import { http } from "viem";

export const config = getDefaultConfig({
  appName: "Nezzar's AA Sandbox",
  projectId: walletConnectProjectId,
  chains: [localhost, initialChain],
  transports: {
    [localhost.id]: http(`http://localhost:8545`),
    [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`),
    [optimismSepolia.id]: http(
      `https://opt-sepolia.g.alchemy.com/v2/${alchemyKey}`
    ),
  },
  ssr: true, // If your dApp uses server side rendering (SSR)
});
