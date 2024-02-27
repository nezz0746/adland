"use client";

import { ConnectButton } from "@/components/connect-button";
import { Separator } from "@/components/ui/separator";
import { http, usePublicClient, useWalletClient } from "wagmi";
import {
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
import { Transport } from "viem";
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

    console.log({ bundler, paymaster });

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

    const to = "0x2D232d68E797C2cB7430000bF2Eff2a9A9F908f1";

    const gasPrices = await bundler.getUserOperationGasPrice();

    const txHash = await account.sendTransaction({
      to,
      data: "0x123",
      value: BigInt(0),
      maxFeePerGas: gasPrices.fast.maxFeePerGas,
      maxPriorityFeePerGas: gasPrices.fast.maxPriorityFeePerGas,
      // nonce: nonce + 10,
      // maxFeePerGas: (
      //   await bundler.getUserOperationGasPrice()
      // ).fast.maxFeePerGas,
      // maxPriorityFeePerGas: (
      //   await bundler.getUserOperationGasPrice()
      // ).fast.maxPriorityFeePerGas,
    });

    setTxHash(txHash);
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
              <CardFooter>
                <Button
                  onClick={() => {
                    sendEth();
                  }}
                >
                  Send ETH
                </Button>
                {txHash && (
                  <Link
                    target="_blank"
                    href={
                      initialChain.blockExplorers?.default.url + "/tx/" + txHash
                    }
                  >
                    {txHash}
                  </Link>
                )}
              </CardFooter>
            </Card>
          </>
        )}
      </main>
    </>
  );
}
