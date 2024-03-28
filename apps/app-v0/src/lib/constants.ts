import { ENTRYPOINT_ADDRESS_V06 } from "permissionless";
import { Address, Chain } from "viem";
import { optimismSepolia, sepolia } from "viem/chains";

export const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";

export const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "";

export const pimlicoAPIKey = process.env.NEXT_PUBLIC_PIMLICO_KEY;

export const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID || "";

export const initialChain: Chain = optimismSepolia;

export type AppChainIds = typeof sepolia.id | typeof optimismSepolia.id;

export const entryPoint = ENTRYPOINT_ADDRESS_V06;

export type Entrypoint = typeof entryPoint;

const pimNetworkNames: Record<number, string> = {
  [sepolia.id]: "sepolia",
  [optimismSepolia.id]: "optimism-sepolia",
};

export const pimilcoURLV2 =
  "https://api.pimlico.io/v2/" +
  pimNetworkNames[initialChain.id] +
  "/rpc?apikey=" +
  pimlicoAPIKey;
export const pimilcoURLV1 =
  "https://api.pimlico.io/v1/" +
  pimNetworkNames[initialChain.id] +
  "/rpc?apikey=" +
  pimlicoAPIKey;

export const superfluidAddresses: Record<
  AppChainIds,
  { ethx: Address; daix: Address; cfaV1: Address }
> = {
  [11155111]: {
    ethx: "0x30a6933Ca9230361972E413a15dC8114c952414e",
    daix: "0x9Ce2062b085A2268E8d769fFC040f6692315fd2c",
    cfaV1: "0xcfA132E353cB4E398080B9700609bb008eceB125",
  },
  [11155420]: {
    ethx: "0x0043d7c85C8b96a49A72A92C0B48CdC4720437d7",
    daix: "0xD6FAF98BeFA647403cc56bDB598690660D5257d2",
    cfaV1: "0xcfA132E353cB4E398080B9700609bb008eceB125",
  },
};

export const NATIVE_CURRENCY = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

export const ipfsGateway = `https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_DOMAIN}/ipfs`;

export const alchemyUrlByChain: Record<number, string> = {
  [sepolia.id]: `https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`,
  [optimismSepolia.id]: `https://opt-sepolia.g.alchemy.com/v2/${alchemyKey}`,
};

export enum FrameAspectRatio {
  RECTANGLE = "1.91:1",
  SQUARE = "1:1",
}

export const baseURL = (() => {
  let protocol = "http";
  let url = "localhost:3099";
  if (process.env.VERCEL_URL) {
    protocol = "https";
    url = process.env.VERCEL_URL;
  } else if (process.env.VERCEL_BRANCH_URL) {
    protocol = "https";
    url = process.env.VERCEL_BRANCH_URL;
  } else if (typeof window !== "undefined" && window.location.host) {
    protocol = window.location.protocol;
    url = window.location.origin;
    return url;
  } else {
    protocol = "http";
    url = "localhost:3099";
  }

  return `${protocol}://${url}`;
})();
