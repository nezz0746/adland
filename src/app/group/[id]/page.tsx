"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  useReadAdCommonOwnershipGetAdGroup,
  useReadDirectListingsLogicGetAllListings,
  useReadIsethBalanceOf,
} from "@/generated";
import { superfluidAddresses } from "@/lib/constants";
import { truncateAddress } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { formatEther } from "viem";

const GroupPage = () => {
  const { push } = useRouter();
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

  const { data: benefBalance } = useReadIsethBalanceOf({
    address: superfluidAddresses[11155111].ethx,
    args: adGroup?.beneficiary && [adGroup?.beneficiary],
    query: {
      enabled: Boolean(adGroup?.beneficiary),
      select: (data) => {
        return formatEther(data);
      },
    },
  });

  const { data: listings } = useReadDirectListingsLogicGetAllListings({
    args: adGroup && [adGroup?.startListingId, adGroup?.endListingId],
    query: {
      enabled: isSuccess,
      select: (data) => {
        return data.map((listing) => {
          return {
            ...listing,
            listingId: Number(listing.listingId),
          };
        });
      },
    },
  });

  console.log({ adGroup, listings });

  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader>
          <CardTitle>Group #{id}</CardTitle>
          <CardDescription>
            Ad Group of size {adGroup?.size} for beneficiary{" "}
            {truncateAddress(adGroup?.beneficiary)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row">
            <p>Balance: {benefBalance} ETH</p>
          </div>
        </CardContent>
      </Card>
      <Separator />
      <div className="grid grid-cols-3 gap-2">
        {listings?.map((listing, index) => (
          <Card
            className="cursor-pointer truncate"
            onClick={() => {
              push(`/listing/${listing.listingId}`);
            }}
          >
            <CardHeader>
              <CardTitle>Ad Space #{index + 1}</CardTitle>
              <CardDescription>
                Owner: {truncateAddress(listing.listingCreator)}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GroupPage;
