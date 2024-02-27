import { ENTRYPOINT_ADDRESS_V06 } from "permissionless";
import { Chain } from "viem";
import { sepolia } from "viem/chains";

export const pimlicoAPIKey = process.env.NEXT_PUBLIC_PIMLICO_KEY;

export const initialChain: Chain = sepolia;

export const entryPoint = ENTRYPOINT_ADDRESS_V06;

export const pimilcoURLV2 =
  "https://api.pimlico.io/v2/sepolia/rpc?apikey=" + pimlicoAPIKey;
export const pimilcoURLV1 =
  "https://api.pimlico.io/v1/sepolia/rpc?apikey=" + pimlicoAPIKey;
