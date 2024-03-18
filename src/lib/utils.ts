import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Address, Chain } from "viem";
import { FrameAspectRatio, initialChain, ipfsGateway } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateAddress = (address?: string) => {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const getExplorerLink = (
  data: Address | string,
  path: "tx" | "address",
  chain: Chain = initialChain
) => {
  return `${chain?.blockExplorers?.default?.url}/${path}/${data}`;
};

export const getGatewayUri = (ipfsURI: string) => {
  return `${ipfsGateway}/${ipfsURI.split("ipfs://")[1]}`;
};

export const getWeeklyTaxDue = (price: bigint, taxRate: bigint) => {
  return (BigInt(price) * BigInt(taxRate)) / BigInt(10000);
};

export const allDefined = (...args: unknown[]): boolean => {
  return args.every((arg) => arg !== undefined);
};

export const getSimulationArgs = <ArgT>(args: unknown[]): ArgT | undefined => {
  if (!allDefined(...args)) return undefined;

  return args as ArgT;
};

export const getAR = (aspectRatio?: string): FrameAspectRatio => {
  return (
    Object.values(FrameAspectRatio).find((ar) => ar === aspectRatio) ||
    FrameAspectRatio.RECTANGLE
  );
};
