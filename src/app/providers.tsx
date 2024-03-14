"use client";

import React from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { Toaster } from "@/components/ui/sonner";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";
import { initialChain } from "@/lib/constants";
import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import StreamPermissionButton from "@/components/stream-permission-button";

export const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={initialChain}>
          <nav className="p-4 flex flex-row justify-between">
            <Link href={"/"} className="text-xl font-bold">
              <Button variant="outline">App</Button>
            </Link>
            <div className="flex flex-row gap-2">
              <StreamPermissionButton />
              <ConnectButton />
            </div>
          </nav>
          <Separator />
          <main className="p-4 flex flex-col gap-2">{children}</main>
          <Toaster />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
