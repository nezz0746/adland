"use client";

import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";
import { useSmartAccount } from "@/lib/pimlico";

export default function Home() {
  const { smartAccount } = useSmartAccount();

  return (
    <>
      <nav className="p-4 flex flex-row justify-between">
        <p className="text-xl font-bold">App</p>
        <ConnectButton />
      </nav>
      <Separator />
      <main className="p-4 flex flex-col gap-2">
        {smartAccount && <p>{smartAccount.account.address}</p>}
      </main>
    </>
  );
}
