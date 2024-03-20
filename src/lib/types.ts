import { adCommonOwnershipAbi, directListingsLogicAbi } from "@/generated";
import { ContractFunctionReturnType } from "viem";

export type Listings = ContractFunctionReturnType<
  typeof directListingsLogicAbi,
  "view",
  "getAllListings"
>;

export type Listing = ContractFunctionReturnType<
  typeof directListingsLogicAbi,
  "view",
  "getAllListings"
>[0];

export type AdGroup = ContractFunctionReturnType<
  typeof adCommonOwnershipAbi,
  "view",
  "getAdGroup"
>;

export type Ad = ContractFunctionReturnType<
  typeof adCommonOwnershipAbi,
  "view",
  "getAd"
>;

export type Metadata = {
  name: string;
  image: string;
  description: string;
  animation_url?: string;
  external_url?: string;
  aspect_ratio?: string;
};

export type GetAdReturnType = Ad & {
  gatewayUri: string | null;
  metadata: Metadata | null;
};
