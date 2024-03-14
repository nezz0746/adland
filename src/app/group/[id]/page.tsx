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
  useReadCfAv1ForwarderGetAccountFlowrate,
  useReadDirectListingsLogicGetAllListings,
  useReadIsethBalanceOf,
} from "@/generated";
import useAppContracts from "@/hooks/useAppContracts";
import FlowingBalance from "@/lib/superfluid";
import { useParams } from "next/navigation";
import { formatEther } from "viem";

import AdSpaceCard from "@/components/ad-space-card";
import { useState } from "react";
import AccountLink from "@/components/account-link";

const GroupPage = () => {
  const { ethx, cfaV1 } = useAppContracts();
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

  const { data: benefBalance, dataUpdatedAt } = useReadIsethBalanceOf({
    address: ethx,
    args: adGroup?.beneficiary && [adGroup?.beneficiary],
    query: {
      enabled: Boolean(adGroup?.beneficiary),
    },
  });

  const { data: listings } = useReadDirectListingsLogicGetAllListings({
    args: adGroup && [adGroup?.startListingId, adGroup?.endListingId],
    query: {
      enabled: isSuccess,
    },
  });

  const { data: benefFlowRate } = useReadCfAv1ForwarderGetAccountFlowrate({
    address: cfaV1,
    args: adGroup?.beneficiary && [ethx, adGroup?.beneficiary],
    query: {
      enabled: Boolean(adGroup?.beneficiary),
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader>
          <CardTitle>Group #{id}</CardTitle>
          <CardDescription>
            Ad Group of size {adGroup?.size} for beneficiary{" "}
            {adGroup?.beneficiary && (
              <AccountLink address={adGroup?.beneficiary} />
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row gap-2">
            <p className="">Realtime balance: </p>{" "}
            {benefBalance !== undefined && benefFlowRate !== undefined && (
              <FlowingBalance
                startingBalance={benefBalance}
                startingBalanceDate={new Date(dataUpdatedAt)}
                flowRate={benefFlowRate}
              />
            )}
            <p>ETH</p>
          </div>
          <p className="text-green-700">
            +{" "}
            {formatEther(
              (benefFlowRate ?? BigInt(0)) * BigInt(60 * 60 * 24 * 7)
            )}{" "}
            / week
          </p>
        </CardContent>
      </Card>
      <Separator />
      <div className="grid grid-cols-3 gap-2">
        {adGroup &&
          listings?.map((listing) => {
            return (
              <AdSpaceCard
                key={listing.listingId}
                listing={listing}
                adGroup={adGroup}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GroupPage;
