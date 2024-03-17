import { NextRequest, NextResponse } from "next/server";
import { GetAdReturnType } from "@/lib/types";
import { fetchAd } from "@/lib/ad";

export const dynamic = "force-dynamic";

type GetAdsRouteParams = { params: { listingId: string } };

export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  return NextResponse.json<GetAdReturnType>(await fetchAd(params.listingId));
}
