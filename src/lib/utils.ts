import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Address, Chain } from "viem";
import { initialChain } from "./constants";

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

export const getWeeklyTaxDue = (price: bigint, taxRate: bigint) => {
  return (BigInt(price) * BigInt(taxRate)) / BigInt(10000);
};
