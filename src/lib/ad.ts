import { client } from "@/app/api/services";
import { adCommonOwnershipAbi, adCommonOwnershipAddress } from "@/generated";
import { readContract } from "viem/actions";
import { initialChain } from "./constants";
import { fetchJSON, formatAd } from "@/app/api/helpers";
import { GetAdReturnType } from "./types";

export const fetchAd = async (listingId: string): Promise<GetAdReturnType> => {
  const res = await readContract(client, {
    address:
      adCommonOwnershipAddress[
        initialChain.id as keyof typeof adCommonOwnershipAddress
      ],
    abi: adCommonOwnershipAbi,
    functionName: "getAd",
    args: [BigInt(parseInt(listingId))],
  }).then(formatAd);

  return {
    ...res,
    metadata: res.gatewayUri ? await fetchJSON(res.gatewayUri) : null,
  };
};
