import { adCommonOwnershipAbi, adCommonOwnershipAddress } from "@/generated";
import { initialChain } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";
import { readContract } from "viem/actions";
import { client } from "../../services";
import { formatAd } from "../../helpers";

type GetAdsRouteParams = { params: { listingId: string } };

export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  return readContract(client, {
    address:
      adCommonOwnershipAddress[
        initialChain.id as keyof typeof adCommonOwnershipAddress
      ],
    abi: adCommonOwnershipAbi,
    functionName: "getAd",
    args: [BigInt(parseInt(params.listingId))],
  })
    .then(formatAd)
    .then((res) => NextResponse.json(res));
}
