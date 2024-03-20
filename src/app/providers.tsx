"use client";

import React from "react";
import { WagmiProvider, createConfig } from "wagmi";
import { Toaster } from "@/components/ui/sonner";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";
import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import StreamPermissionButton from "@/components/stream-permission-button";
import { PrivyProvider } from "@privy-io/react-auth";
import { privyAppId } from "@/lib/constants";

export const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
        },
        loginMethods: ["wallet"],
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </WagmiProvider>
    </PrivyProvider>
  );
};

export default Providers;
