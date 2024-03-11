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
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={initialChain}>
          <PimlicoProvider>
            <nav className="p-4 flex flex-row justify-between">
              <Link href={"/"} className="text-xl font-bold">
                <Button variant="outline">App</Button>
              </Link>
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
