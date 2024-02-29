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
import { truncateAddress } from "@/lib/utils";
import { counterAbi, counterAddress } from "@/generated";
import { BaseError, UserRejectedRequestError, encodeFunctionData } from "viem";
import { Input } from "@/components/ui/input";
import CounterDisplay from "@/components/counter-display";
import { useState } from "react";
import { bundler } from "@/lib/pimlico.config";
import { toast } from "sonner";

export default function Home() {
  const [sendingTransaction, setSendingTransaction] = useState(false);
  const { smartAccount } = useSmartAccount();

  const incrementCounter = async () => {
    try {
      if (!smartAccount) return;

      setSendingTransaction(true);

      const { fast } = await bundler.getUserOperationGasPrice();

      await smartAccount.sendTransaction({
        to: counterAddress[11155111],
        data: encodeFunctionData({
          abi: counterAbi,
          functionName: "increment",
          args: [],
        }),
        value: BigInt(0),
        maxFeePerGas: fast.maxFeePerGas,
        maxPriorityFeePerGas: fast.maxPriorityFeePerGas,
      });
    } catch (err) {
      const error = err as BaseError;

      if (error instanceof UserRejectedRequestError) {
        toast.error("User rejected request");
      }
    }

    setSendingTransaction(false);
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
                    href={
                      initialChain.blockExplorers?.default.url +
                      "/address/" +
                      counterAddress[
                        initialChain.id as keyof typeof counterAddress
                      ]
                    }
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
                <Button
                  disabled={sendingTransaction}
                  onClick={() => {
                    incrementCounter();
                  }}
                >
                  {sendingTransaction && (
                    <ReloadIcon className="w-4 h-4 animate-spin mr-1" />
                  )}
                  Increment
                </Button>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input
                    type="number"
                    placeholder="New number"
                    autoComplete="off"
                    min={0}
                    step={1}
                    onChange={(e) => {
                      // setNumberInputValue(e.target.valueAsNumber)
                    }}
                  />
                  <Button disabled type="submit">
                    Set Number
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </>
  );
}
