"use client";

import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";
import { ReloadIcon, RocketIcon } from "@radix-ui/react-icons";
import { http, usePublicClient, useWalletClient } from "wagmi";
import { toast } from "sonner";
import {
  BundlerOutOfGasError,
  InvalidSmartAccountNonceError,
  SmartAccountClient,
  createSmartAccountClient,
  walletClientToSmartAccountSigner,
} from "permissionless";
import {
  createPimlicoPaymasterClient,
  createPimlicoBundlerClient,
} from "permissionless/clients/pimlico";
import {
  entryPoint,
  initialChain,
  pimilcoURLV1,
  pimilcoURLV2,
} from "@/lib/constants";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  SmartAccount,
  signerToSimpleSmartAccount,
} from "permissionless/accounts";
import { Transport, BaseError } from "viem";
import { Chain } from "@rainbow-me/rainbowkit";
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

const truncateAddress = (address?: string) => {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const usePimlico = () => {
  const bundler = createPimlicoBundlerClient({
    chain: initialChain,
    transport: http(pimilcoURLV1),
    entryPoint,
  });

  const paymaster = createPimlicoPaymasterClient({
    transport: http(pimilcoURLV2),
    entryPoint,
  });

  return { bundler, paymaster };
};

export default function Home() {
  const [account, setAccount] = useState<SmartAccountClient<
    typeof entryPoint,
    Transport,
    Chain,
    SmartAccount<typeof entryPoint>
  > | null>(null);
  const [sending, setSending] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const { data } = useWalletClient();
  const publicClient = usePublicClient();
  const walletClient = useWalletClient();
  const { bundler, paymaster } = usePimlico();

  const createAccount = async () => {
    if (!data?.account || !walletClient.data || !publicClient) return;

    const simpleSmartAccountClient = await signerToSimpleSmartAccount(
      publicClient,
      {
        entryPoint,
        signer: walletClientToSmartAccountSigner(walletClient.data),
        factoryAddress: "0x9406Cc6185a346906296840746125a0E44976454",
      }
    );

    if (!bundler || !paymaster) return;

    const smartAccountClient = createSmartAccountClient({
      account: simpleSmartAccountClient,
      chain: initialChain,
      bundlerTransport: http(pimilcoURLV1),
      entryPoint,
      middleware: {
        gasPrice: async () => {
          return (await bundler.getUserOperationGasPrice()).fast;
        },
        sponsorUserOperation: paymaster.sponsorUserOperation,
      },
    });

    setAccount(smartAccountClient);
  };

  useEffect(() => {
    if (!account) {
      createAccount();
    }
  }, [walletClient]);

  const sendEth = async () => {
    if (!account || !publicClient) return;
    setSending(true);

    const to = "0x2D232d68E797C2cB7430000bF2Eff2a9A9F908f1";

    const gasPrices = await bundler.getUserOperationGasPrice();

    try {
      const txHash = await account.sendTransaction({
        to,
        data: "0x123",
        value: BigInt(0),
        maxFeePerGas: gasPrices.fast.maxFeePerGas,
        maxPriorityFeePerGas: gasPrices.fast.maxPriorityFeePerGas,
      });

      setTxHash(txHash);
    } catch (e) {
      const error = e as BaseError;

      const message = (error.details || "").toLowerCase();

      if (InvalidSmartAccountNonceError.message.test(message)) {
        toast.error("Invalid Smart Account Nonce");
      } else if (BundlerOutOfGasError.message.test(message)) {
        toast.error("Out of gas");
      } else {
        toast.error("An error occurred");
      }
    }
    setSending(false);
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
                  disabled={sending}
                  onClick={() => {
                    sendEth();
                  }}
                >
                  {sending && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Send{sending && "ing"} Transaction
                </Button>
                {txHash && (
                  <Alert>
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      You can add components to your app using the cli.
                      <Link
                        target="_blank"
                        href={
                          initialChain.blockExplorers?.default.url +
                          "/tx/" +
                          txHash
                        }
                      >
                        <p>{truncateAddress(txHash)}</p>
                      </Link>
                    </AlertDescription>
                  </Alert>
                )}
              </CardFooter>
            </Card>
          </>
        )}
      </main>
    </>
  );
}
