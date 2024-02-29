"use client";

import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";
import { ReloadIcon } from "@radix-ui/react-icons";
import { initialChain } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSmartAccount } from "@/lib/pimlico";
import { getExplorerLink, truncateAddress } from "@/lib/utils";
import { counterAddress } from "@/generated";
import CounterDisplay from "@/components/counter-display";
import useCounter from "@/lib/counter";
import CounterInput from "@/components/counter-input";

export default function Home() {
  const { smartAccount } = useSmartAccount();
  const { writeCounter, isPending } = useCounter();

  const increment = () => {
    writeCounter({
      functionName: "increment",
    });
  };

  return (
    <>
      <nav className="p-4 flex flex-row justify-between">
        <p className="text-xl font-bold">App</p>
        <ConnectButton />
      </nav>
      <Separator />
      <main className="p-4 flex flex-col gap-2">
        {smartAccount && (
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
            <CardContent>
              <div className="flex flex-row justify-between gap-2">
                <Button disabled={isPending} onClick={increment}>
                  {isPending && (
                    <ReloadIcon className="w-4 h-4 animate-spin mr-1" />
                  )}
                  Increment
                </Button>
                <CounterInput />
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </>
  );
}
