import {
  BundlerOutOfGasError,
  InvalidSmartAccountNonceError,
  SmartAccountClient,
  SmartAccountValidationRevertedError,
} from "permissionless";
import {
  Entrypoint,
  entryPoint,
  initialChain,
  pimilcoURLV1,
  pimilcoURLV2,
} from "./constants";
import { BaseError, Chain, Transport, http } from "viem";
import { SmartAccount } from "permissionless/accounts";
import {
  createPimlicoBundlerClient,
  createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico";
import { toast } from "sonner";

export type AppSmartAccountClient = SmartAccountClient<
  Entrypoint,
  Transport,
  Chain,
  SmartAccount<Entrypoint>
>;

export const bundler = createPimlicoBundlerClient({
  chain: initialChain,
  transport: http(pimilcoURLV1),
  entryPoint,
});

export const paymaster = createPimlicoPaymasterClient({
  chain: initialChain,
  transport: http(pimilcoURLV2),
  entryPoint,
});

export const _handleBundlerErrors = (e: unknown) => {
  const error = e as BaseError;

  const message = (error.details || "").toLowerCase();

  if (InvalidSmartAccountNonceError.message.test(message)) {
    toast.error("Invalid Smart Account Nonce");
  } else if (SmartAccountValidationRevertedError.message.test(message)) {
    toast.error("Smart Account Validation Reverted");
  } else if (BundlerOutOfGasError.message.test(message)) {
    toast.error("Out of gas");
  } else {
    toast.error("An error occurred");
  }
  console.error(e);
};
