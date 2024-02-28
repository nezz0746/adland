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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { usePimlico } from "@/lib/pimlico";
import { truncateAddress } from "@/lib/utils";
import { counterAbi, counterAddress, useReadCounterNumber } from "@/generated";
import { encodeFunctionData } from "viem";
import { useWatchContractEvent } from "wagmi";
import { queryClient } from "./providers";

export default function Home() {
  const {
    account,
    senTransaction: { send, loading, txHash },
  } = usePimlico();

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

  const incrementCounter = async () => {
    try {
      if (!account) return;

      account.sendTransaction({
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

  const sendTransaction = async () => {
    const to = "0x2D232d68E797C2cB7430000bF2Eff2a9A9F908f1";
    const data = "0x123";
    const value = BigInt(0);

    send({ to, data, value });
  };

  return (
    <>
      <nav className="p-4 flex flex-row justify-between">
        <p className="text-xl font-bold">App</p>
        <ConnectButton />
      </nav>
      <Separator />
      <main className="p-4">
        {account && (
          <>
            <Card>
              <CardHeader>
                <CardTitle>{account.name}</CardTitle>
                <CardDescription>
                  Smart account deployed on {initialChain.name}:{" "}
                  <Link
                    target="_blank"
                    href={
                      initialChain.blockExplorers?.default.url +
                      "/address/" +
                      account.account.address
                    }
                    className="underline"
                  >
                    {truncateAddress(account.account.address)}
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                Send Transactions using your smart account
              </CardContent>
              <CardFooter className="flex flex-col gap-2 items-start">
                <Button
                  disabled={loading}
                  onClick={() => {
                    sendTransaction();
                  }}
                >
                  {loading && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Send{loading && "ing"} Transaction
                </Button>
                {txHash && (
                  <Alert>
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Transaction Successfull!</AlertTitle>
                    <AlertDescription>
                      <p>
                        You can see you transaction on this explorer following
                        this link:
                        <span className="ml-2">
                          <Link
                            target="_blank"
                            className="underline"
                            href={
                              initialChain.blockExplorers?.default.url +
                              "/tx/" +
                              txHash
                            }
                          >
                            {truncateAddress(txHash)}
                          </Link>
                        </span>
                      </p>
                    </AlertDescription>
                  </Alert>
                )}
              </CardFooter>
            </Card>
          </>
        )}
        {account && (
          <>
            <p>{Number(number)}</p>
            <Button
              onClick={() => {
                incrementCounter();
              }}
            >
              Increment
            </Button>
          </>
        )}
      </main>
    </>
  );
}
