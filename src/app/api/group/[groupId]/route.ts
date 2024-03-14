import { adCommonOwnershipAbi, adCommonOwnershipAddress } from "@/generated";
import { initialChain } from "@/lib/constants";
import { NextResponse, NextRequest } from "next/server";
import { readContract } from "viem/actions";
import { client } from "../../services";
import { formatAds } from "../../helpers";

type GetAdsRouteParams = { params: { groupId: string } };

export async function GET(req: NextRequest, { params }: GetAdsRouteParams) {
  const { groupId: groupIdString } = params;

  const groupId = BigInt(groupIdString);

  const { beneficiary, startListingId, endListingId } = await readContract(
    client,
    {
      address:
        adCommonOwnershipAddress[
          initialChain.id as keyof typeof adCommonOwnershipAddress
        ],
      abi: adCommonOwnershipAbi,
      functionName: "getAdGroup",
      args: [groupId],
    }
  );

  const start = Number(startListingId);
  const end = Number(endListingId);

  const adsPromises = Array.from({ length: end - start + 1 }, (_, i) => {
    return readContract(client, {
      address:
        adCommonOwnershipAddress[
          initialChain.id as keyof typeof adCommonOwnershipAddress
        ],
      abi: adCommonOwnershipAbi,
      functionName: "getAd",
      args: [BigInt(i + start)],
    });
  });

  const ads = await Promise.all(adsPromises).then(formatAds);

  return NextResponse.json({ start, end, beneficiary, ads });
}
