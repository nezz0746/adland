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
import { http } from "viem";

export const usePimlico = () => {
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
