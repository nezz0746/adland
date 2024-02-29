import { useMutation } from "@tanstack/react-query";
import { useSmartAccount } from "./pimlico";
import {
  Address,
  BaseError,
  EncodeFunctionDataParameters,
  UserRejectedRequestError,
  encodeFunctionData,
} from "viem";
import { counterAbi, counterAddress } from "@/generated";
import { toast } from "sonner";
import { _handleBundlerErrors, bundler } from "./pimlico.config";

const useCounter = () => {
  const { smartAccount } = useSmartAccount();

  const { mutate, mutateAsync, ...result } = useMutation<
    Address | undefined,
    undefined,
    Pick<
      EncodeFunctionDataParameters<typeof counterAbi, any>,
      "functionName" | "args"
    >
  >({
    mutationFn: async ({ functionName, args }) => {
      if (!smartAccount) return Promise.resolve(undefined);

      const { fast } = await bundler.getUserOperationGasPrice();

      return smartAccount.sendTransaction({
        to: counterAddress[11155111],
        data: encodeFunctionData<typeof counterAbi>({
          abi: counterAbi,
          functionName,
          args,
        }),
        maxFeePerGas: fast.maxFeePerGas,
        maxPriorityFeePerGas: fast.maxPriorityFeePerGas,
      });
    },
    onError: (err) => {
      const error = err as unknown as BaseError;
      if (error instanceof UserRejectedRequestError) {
        toast.error("User rejected request");
      } else {
        _handleBundlerErrors(err);
      }
    },
  });

  return {
    ...result,
    writeCounter: mutate,
    writeCounterAsync: mutateAsync,
  };
};

export default useCounter;
