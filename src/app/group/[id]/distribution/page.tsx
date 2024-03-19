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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useReadAdCommonOwnershipGetAdGroup,
  useReadDirectListingsLogicGetAllListings,
} from "@/generated";
import { usePrivy } from "@privy-io/react-auth";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

const GroupDistributionPage = () => {
  const { user, linkFarcaster } = usePrivy();
  const [channelName, setChannelName] = useState("");
  const { id } = useParams();

  const { data: adGroup, isSuccess } = useReadAdCommonOwnershipGetAdGroup({
    args: [BigInt(parseInt(id as string))],
    query: {
      enabled: id !== undefined,
      select: (data) => {
        const size = Number(data.endListingId - data.startListingId) + 1;

        return {
          beneficiary: data.beneficiary,
          startListingId: data.startListingId,
          endListingId: data.endListingId,
          size,
        };
      },
    },
  });

  const { data: listings } = useReadDirectListingsLogicGetAllListings({
    args: adGroup && [adGroup?.startListingId, adGroup?.endListingId],
    query: {
      enabled: isSuccess,
    },
  });

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
    onError: (error) => {
      console.error(error);
    },
  });

  const submitAd = async (adListingId: string) => {
    if (!user?.farcaster?.fid) return;

    pushAdOnChannel({
      userFid: user?.farcaster?.fid,
      channelName,
      adListingId,
    });
  };

  const signedInWithFarcaster = Boolean(user?.farcaster);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Farcaster Channel Distribution</CardTitle>
          <CardDescription>
            You must be channel lead/owner in order to publish ad casts to it
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="Channel Name"
            disabled={!signedInWithFarcaster}
          />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
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
                        disabled={isPending}
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
            disabled={signedInWithFarcaster}
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
