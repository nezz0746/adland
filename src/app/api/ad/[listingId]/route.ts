import { adCommonOwnershipAbi, adCommonOwnershipAddress } from "@/generated";
import { initialChain } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";
import { readContract } from "viem/actions";
import { client } from "../../services";
import { formatAd } from "../../helpers";
import { GetAdReturnType } from "@/lib/types";

export const dynamic = "force-dynamic";

type GetAdsRouteParams = { params: { listingId: string } };

const fetchJSON = async (url: string) => {
  return fetch(url).then((res) => {
    return res.json();
  });
};

export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  const res = await readContract(client, {
    address:
      adCommonOwnershipAddress[
        initialChain.id as keyof typeof adCommonOwnershipAddress
      ],
    abi: adCommonOwnershipAbi,
    functionName: "getAd",
    args: [BigInt(parseInt(params.listingId))],
  }).then(formatAd);

  return NextResponse.json<GetAdReturnType>({
    ...res,
    metadata: res.gatewayUri ? await fetchJSON(res.gatewayUri) : null,
  });
}
