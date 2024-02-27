import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { initialChain } from "./constants";

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [initialChain],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
