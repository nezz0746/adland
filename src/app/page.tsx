"use client";

import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <div className="p-4 flex flex-row justify-between">
        <p className="text-xl font-bold">App</p>
        <ConnectButton />
      </div>
      <Separator />
    </main>
  );
}
