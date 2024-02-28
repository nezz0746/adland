"use client";

import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";
import { ReloadIcon, RocketIcon } from "@radix-ui/react-icons";
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
import { usePimlico } from "@/lib/pimlico";
import { truncateAddress } from "@/lib/utils";
import { counterAbi, counterAddress, useReadCounterNumber } from "@/generated";
import { encodeFunctionData } from "viem";
import { useWatchContractEvent } from "wagmi";
import { queryClient } from "./providers";
import { Input } from "@/components/ui/input";

export default function Home() {
  const { smartAccountClient } = usePimlico();

  const incrementCounter = async () => {
    try {
      if (!smartAccountClient) return;

      smartAccountClient.sendTransaction({
        to: counterAddress[11155111],
        data: encodeFunctionData({
          abi: counterAbi,
          functionName: "increment",
          args: [],
        }),
        value: BigInt(0),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className="p-4 flex flex-row justify-between">
        <p className="text-xl font-bold">App</p>
        <ConnectButton />
      </nav>
      <Separator />
      <main className="p-4 flex flex-col gap-2">
        {smartAccountClient && (
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
                  onClick={() => {
                    incrementCounter();
                  }}
                >
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

const CounterDisplay = () => {
  const { data: number, queryKey } = useReadCounterNumber();

  useWatchContractEvent({
    abi: counterAbi,
    address: counterAddress[11155111],
    eventName: "NumberChanged",
    onLogs: (logs) => {
      const newNumber = logs[0].args.newNumber;

      queryClient.setQueryData(queryKey, newNumber);
    },
  });

  return (
    <div className="flex flex-col gap-1 items-center">
      <CardDescription>Value</CardDescription>
      <p className="text-3xl">{Number(number)}</p>
    </div>
  );
};
