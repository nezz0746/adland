import { ENTRYPOINT_ADDRESS_V06 } from "permissionless";
import { Address, Chain } from "viem";
import { sepolia } from "viem/chains";

export const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";

export const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "";

export const pimlicoAPIKey = process.env.NEXT_PUBLIC_PIMLICO_KEY;

export const initialChain: Chain = sepolia;

export const entryPoint = ENTRYPOINT_ADDRESS_V06;

export type Entrypoint = typeof entryPoint;

export const pimilcoURLV2 =
  "https://api.pimlico.io/v2/sepolia/rpc?apikey=" + pimlicoAPIKey;
export const pimilcoURLV1 =
  "https://api.pimlico.io/v1/sepolia/rpc?apikey=" + pimlicoAPIKey;

export const superfluidAddresses: Record<
  11155111,
  { ethx: Address; daix: Address; cfaV1: Address }
> = {
  [11155111]: {
    ethx: "0x30a6933Ca9230361972E413a15dC8114c952414e",
    daix: "0x9Ce2062b085A2268E8d769fFC040f6692315fd2c",
    cfaV1: "0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef",
  },
};

export const NATIVE_CURRENCY = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
