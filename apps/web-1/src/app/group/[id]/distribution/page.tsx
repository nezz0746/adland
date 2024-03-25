"use client";

import { PublishAdsFarcasterRequestBody } from "@/app/api/publish/farcaster/route";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { usePrivy } from "@privy-io/react-auth";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useAccount } from "wagmi";
import { toast } from "sonner";
import Link from "next/link";
import { GroupLayoutContext } from "../context";

const GroupDistributionPage = () => {
  const { user, linkFarcaster } = usePrivy();
  const { address } = useAccount();
  const [channelName, setChannelName] = useState("");

  const { adGroup, listings } = useContext(GroupLayoutContext);

  const isBeneficiary =
    adGroup?.beneficiary?.toLowerCase() === address?.toLowerCase();

  const { mutate: pushAdOnChannel, isPending } = useMutation({
    mutationFn: (data: PublishAdsFarcasterRequestBody) => {
      return fetch("/api/publish/farcaster", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    },
  });

  const submitAd = async (adListingId: string) => {
    if (!user?.farcaster?.fid) return;

    pushAdOnChannel(
      {
        userFid: user?.farcaster?.fid,
        channelName,
        adListingId,
      },
      {
        onSuccess: (data) => {
          if (data.error) {
            if (data.error === "NO_CHANNEL") {
              toast.error("Please enter a valid channel name");
            } else if (data.error === "USER_NOT_LEAD") {
              toast.error("You are not the lead of this channel");
            } else if (data.error === "AD_NOT_VALID") {
              toast.error("Ad not valid");
            } else {
              toast.error("An error occurred publishing the ad");
            }
          } else {
            const castHash = data.cast.hash;
            const warpcastURL = `https://warpcast.com/${channelName}/${castHash}`;

            toast.success(
              <>
                Ad published successfully!{" "}
                <Link target="_blank" href={warpcastURL} className="underline">
                  View on Warpcast
                </Link>
              </>,
              {
                closeButton: true,
                duration: 60 * 60,
              }
            );
          }
        },
      }
    );
  };

  const signedInWithFarcaster = Boolean(user?.farcaster);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Farcaster Channel Distribution</CardTitle>
          <CardDescription>
            Publish ads as frames:
            <ul className="list-disc ml-4">
              <li>MUST be ad group beneficiary</li>
              <li>MUST be farcaster channel leader/owner</li>
            </ul>
            <p>
              Note: You can publish test ads in the{" "}
              <span className="font-bold">/testchannel</span> channel without
              being the lead.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="Type you channel name here... (or testchannel)"
            disabled={!signedInWithFarcaster}
          />
          <Separator className="my-4" />
          <Table>
            <TableBody>
              {listings?.map((listing) => {
                const adNumber =
                  Number(
                    Number(listing.listingId) -
                      Number(adGroup?.startListingId ?? 0)
                  ) + 1;
                return (
                  <TableRow key={listing?.assetContract + adNumber}>
                    <TableCell>{adNumber}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        disabled={
                          isPending || !isBeneficiary || !signedInWithFarcaster
                        }
                        onClick={() => {
                          submitAd(listing.listingId.toString());
                        }}
                      >
                        Publish
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="gap-2 justify-end">
          <Button
            disabled={signedInWithFarcaster || !isBeneficiary}
            className="gap-2"
            onClick={() => {
              if (!signedInWithFarcaster) linkFarcaster();
            }}
          >
            <img
              src={
                signedInWithFarcaster
                  ? user?.farcaster?.pfp ?? "/farcaster.png"
                  : "/farcaster.png"
              }
              width={20}
              height={20}
              alt="farcaster logo"
            />
            {signedInWithFarcaster
              ? user?.farcaster?.username
              : "Sign in with Farcaster"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GroupDistributionPage;
