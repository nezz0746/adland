import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { initialChain, walletConnectProjectId } from "./constants";

export const config = getDefaultConfig({
  appName: "Nezzar's AA Sandbox",
  projectId: walletConnectProjectId,
  chains: [initialChain],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
