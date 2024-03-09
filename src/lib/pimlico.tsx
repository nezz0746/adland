import { entryPoint, initialChain, pimilcoURLV1 } from "./constants";
import { http } from "viem";
import { usePublicClient, useWalletClient } from "wagmi";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createSmartAccountClient,
  walletClientToSmartAccountSigner,
} from "permissionless";
import { signerToSimpleSmartAccount } from "permissionless/accounts";
import { AppSmartAccountClient, bundler, paymaster } from "./pimlico.config";

type PimlicoContextType = {
  smartAccount: AppSmartAccountClient | null;
};

const PimlicoContext = createContext<PimlicoContextType>({
  smartAccount: null,
});

const usePimlico = () => {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const [smartAccountClient, setSmartAccountClient] =
    useState<AppSmartAccountClient | null>(null);

  const getAccount = async () => {
    if (!walletClient || !publicClient) return;

    const ssa = await signerToSimpleSmartAccount(publicClient, {
      entryPoint,
      signer: walletClientToSmartAccountSigner(walletClient),
      factoryAddress: "0x9406Cc6185a346906296840746125a0E44976454",
    });

    if (!bundler || !paymaster) return;

    const client = createSmartAccountClient({
      account: ssa,
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

    setSmartAccountClient(client);
  };

  useEffect(() => {
    getAccount();
  }, [walletClient]);

  return {
    smartAccountClient,
  };
};

export const PimlicoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const value = usePimlico();

  return (
    <PimlicoContext.Provider value={{ smartAccount: value.smartAccountClient }}>
      {children}
    </PimlicoContext.Provider>
  );
};

export const useSmartAccount = () => {
  const data = useContext(PimlicoContext);

  if (!data)
    throw new Error("useSmartAccount must be used within a PimlicoProvider");

  return data;
};
