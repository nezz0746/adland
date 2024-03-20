"use client";

import AccountLink from "@/components/account-link";
import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import { useParams } from "next/navigation";
import { formatEther } from "viem";
import { GroupLayoutContext } from "./context";

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { ethx, cfaV1 } = useAppContracts();
  const { id } = useParams();

  const { data: adGroup } = useReadAdCommonOwnershipGetAdGroup({
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

  const { data: benefFlowRate, refetch } =
    useReadCfAv1ForwarderGetAccountFlowrate({
      address: cfaV1,
      args: adGroup?.beneficiary && [ethx, adGroup?.beneficiary],
      query: {
        enabled: Boolean(adGroup?.beneficiary),
      },
    });

  const { data: listings, refetch: fetchListings } =
    useReadDirectListingsLogicGetAllListings({
      args: adGroup && [adGroup?.startListingId, adGroup?.endListingId],
    });

  return (
    <div className="flex flex-col md:flex-row items-start gap-2">
      <Card className="md:fixed relative w-full sm:w-[400px]">
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
          <div className="flex flex-col mb-4">
            <p className="text-gray-400">Realtime balance</p>{" "}
            {benefBalance !== undefined && benefFlowRate !== undefined && (
              <FlowingBalance
                startingBalance={benefBalance}
                startingBalanceDate={new Date(dataUpdatedAt)}
                flowRate={benefFlowRate}
                className="text-2xl font-bold"
              />
            )}
            <p className="text-gray-400">Weekly flow</p>{" "}
            <p className="text-lg text-green-700">
              +{" "}
              {formatEther(
                (benefFlowRate ?? BigInt(0)) * BigInt(60 * 60 * 24 * 7)
              )}{" "}
              / week
            </p>
          </div>
          <div>
            <Separator />
            <Link href={`/group/${id}/distribution`}>
              <Button variant="ghost" className="w-full">
                Distribution
              </Button>
            </Link>
            <Separator />
          </div>
        </CardContent>
      </Card>
      <div className="md:ml-[calc(400px+1em)] w-full">
        {adGroup && listings && (
          <GroupLayoutContext.Provider
            value={{
              adGroup: adGroup,
              listings,
              refetchAdGroup: () => {
                refetch();
              },
              refetchListings: () => {
                fetchListings();
              },
            }}
          >
            {children}
          </GroupLayoutContext.Provider>
        )}
      </div>
    </div>
  );
}
