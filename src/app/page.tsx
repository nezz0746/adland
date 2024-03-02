"use client";

import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";
import { initialChain } from "@/lib/constants";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getExplorerLink, truncateAddress } from "@/lib/utils";
import { counterAddress } from "@/generated";
import CounterDisplay from "@/components/counter-display";

export default function Home() {
  return (
    <>
      <nav className="p-4 flex flex-row justify-between">
        <p className="text-xl font-bold">App</p>
        <ConnectButton />
      </nav>
      <Separator />
      <main className="p-4 flex flex-col gap-2">
        <Card>
          <CardHeader className="flex flex-row gap-2">
            <div className="flex-grow">
              <CardTitle className="">Counter</CardTitle>
              <CardDescription className="">
                Increment and watch the counter grow. Contract @{" "}
                <Link
                  target="_blank"
                  href={getExplorerLink(
                    initialChain,
                    counterAddress[11155111],
                    "address"
                  )}
                  className="underline"
                >
                  {truncateAddress(
                    counterAddress[
                      initialChain.id as keyof typeof counterAddress
                    ]
                  )}
                </Link>
              </CardDescription>
            </div>
            <CounterDisplay />
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </main>
    </>
  );
}
