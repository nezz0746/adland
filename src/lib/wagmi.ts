import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  alchemyUrlByChain,
  initialChain,
  walletConnectProjectId,
} from "./constants";
import { localhost, optimismSepolia, sepolia } from "viem/chains";
import { http } from "viem";

export const config = getDefaultConfig({
  appName: "AdLand",
  projectId: walletConnectProjectId,
  chains: [localhost, initialChain],
  transports: {
    [localhost.id]: http(`http://localhost:8545`),
    [sepolia.id]: http(alchemyUrlByChain[sepolia.id]),
    [optimismSepolia.id]: http(alchemyUrlByChain[optimismSepolia.id]),
  },
  ssr: true, // If your dApp uses server side rendering (SSR)
});
