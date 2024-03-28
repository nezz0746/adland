import { NextRequest, NextResponse } from "next/server";
import { NeynarAPIClient } from "@neynar/nodejs-sdk";
import { fetchAd } from "@/lib/ad";
import { baseURL } from "@/lib/constants";

const neynar = new NeynarAPIClient(process.env.NEYNAR_API_KEY ?? "");

const signerUUID = process.env.NEYNAR_SIGNER_UUID ?? "";

export type PublishAdsFarcasterRequestBody = {
  userFid: number;
  channelName: string;
  adListingId: string;
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { userFid, channelName, adListingId } =
    (await req.json()) as PublishAdsFarcasterRequestBody;

  // Get Channel
  // Throw if channel doesn't exist
  try {
    const isTestChannel = channelName === "testchannel";

    const { channel } = await neynar.lookupChannel(channelName);

    const channelLeadFid = channel.lead?.fid;
    // Throw if userFid isn't lead of channel
    if (channelLeadFid !== userFid && !isTestChannel) {
      throw new Error("User is not lead of channel");
    }

    // Get Ad
    const { metadata } = await fetchAd(adListingId);

    if (metadata?.image === "" || !Boolean(metadata)) {
      throw new Error("Ad not valid");
    }

    // Create Cast
    const cast = await neynar.publishCast(
      signerUUID,
      metadata?.description ?? "",
      {
        channelId: channel?.id,
        embeds: [
          {
            url: `${baseURL}/ad/${adListingId}`,
          },
        ],
      }
    );

    // Return Cast ID
    return NextResponse.json({ cast });
  } catch (error) {
    console.log(error);
    // @ts-ignore
    if (error?.response?.data?.message === "id is required") {
      return NextResponse.json({ error: "NO_CHANNEL" });
      // @ts-ignore
    } else if (error.message === "User is not lead of channel") {
      return NextResponse.json({ error: "USER_NOT_LEAD" });
      // @ts-ignore
    } else if (error.message === "Ad not valid") {
      return NextResponse.json({ error: "AD_NOT_VALID" });
    } else {
      return NextResponse.json({ error: "ERROR" });
    }
  }
};
