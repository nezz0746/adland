import {
  createPimlicoBundlerClient,
  createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico";
import {
  entryPoint,
  initialChain,
  pimilcoURLV1,
  pimilcoURLV2,
} from "./constants";
import { Address, BaseError, Chain, Transport, http } from "viem";
import { usePublicClient, useWalletClient } from "wagmi";
import { useEffect, useState } from "react";
import {
  BundlerOutOfGasError,
  InvalidSmartAccountNonceError,
  SmartAccountClient,
  createSmartAccountClient,
  walletClientToSmartAccountSigner,
} from "permissionless";
import {
  SmartAccount,
  signerToSimpleSmartAccount,
} from "permissionless/accounts";
import { toast } from "sonner";

type SendTransactionArgs = {
  to: Address;
  data?: Address;
  value?: bigint;
};

export const usePimlico = () => {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const [sending, setSending] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [account, setAccount] = useState<SmartAccountClient<
    typeof entryPoint,
    Transport,
    Chain,
    SmartAccount<typeof entryPoint>
  > | null>(null);

  const bundler = createPimlicoBundlerClient({
    chain: initialChain,
    transport: http(pimilcoURLV1),
    entryPoint,
  });

  const paymaster = createPimlicoPaymasterClient({
    transport: http(pimilcoURLV2),
    entryPoint,
  });

  const getAccount = async () => {
    if (!walletClient || !publicClient) return;

    const simpleSmartAccountClient = await signerToSimpleSmartAccount(
      publicClient,
      {
        entryPoint,
        signer: walletClientToSmartAccountSigner(walletClient),
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
    getAccount();
  }, [walletClient]);

  const sendTransaction = async (args: SendTransactionArgs, nonce?: number) => {
    if (!account || !publicClient) return;
    setSending(true);

    const { to, data, value } = args;

    const gasPrices = await bundler.getUserOperationGasPrice();

    try {
      const txHash = await account.sendTransaction({
        to,
        data,
        nonce,
        value,
        maxFeePerGas: gasPrices.fast.maxFeePerGas,
        maxPriorityFeePerGas: gasPrices.fast.maxPriorityFeePerGas,
      });

      setTxHash(txHash);
    } catch (e) {
      const error = e as BaseError;

      const message = (error.details || "").toLowerCase();

      if (InvalidSmartAccountNonceError.message.test(message)) {
        if (!nonce) {
          const nextNonce = Number(await account.account.getNonce()) + 1;

          sendTransaction(args, nextNonce);
        } else {
          toast.error("Invalid Smart Account Nonce");
        }
      } else if (BundlerOutOfGasError.message.test(message)) {
        toast.error("Out of gas");
      } else {
        toast.error("An error occurred");
      }
    }
    setSending(false);
  };

  return {
    bundler,
    paymaster,
    account,
    senTransaction: {
      send: sendTransaction,
      loading: sending,
      txHash,
    },
  };
};
