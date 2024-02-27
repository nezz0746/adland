import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia, baseSepolia, optimismSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [sepolia, baseSepolia, optimismSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
