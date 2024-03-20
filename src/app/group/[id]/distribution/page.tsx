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
import { useReadDirectListingsLogicGetAllListings } from "@/generated";
import { usePrivy } from "@privy-io/react-auth";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useAccount } from "wagmi";
import { GroupLayoutContext } from "../layout";

const GroupDistributionPage = () => {
  const { user, linkFarcaster } = usePrivy();
  const { address } = useAccount();
  const [channelName, setChannelName] = useState("");

  const { adGroup } = useContext(GroupLayoutContext);

  const isBeneficiary =
    adGroup?.beneficiary?.toLowerCase() === address?.toLowerCase();

  const { data: listings } = useReadDirectListingsLogicGetAllListings({
    args: adGroup && [adGroup?.startListingId, adGroup?.endListingId],
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
            Publish ads as frames:
            <ul className="list-disc ml-4">
              <li>MUST be ad group beneficiary</li>
              <li>MUST be farcaster channel leader/owner</li>
            </ul>
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
                        disabled={isPending || !isBeneficiary}
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
