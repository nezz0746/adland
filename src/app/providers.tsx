"use client";

import React from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { Toaster } from "@/components/ui/sonner";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";
import { initialChain } from "@/lib/constants";
import { PimlicoProvider } from "@/lib/pimlico";
import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";

export const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={initialChain}>
          <PimlicoProvider>
            <nav className="p-4 flex flex-row justify-between">
              <p className="text-xl font-bold">App</p>
              <ConnectButton />
            </nav>
            <Separator />
            <main className="p-4 flex flex-col gap-2">{children}</main>
            <Toaster />
          </PimlicoProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
