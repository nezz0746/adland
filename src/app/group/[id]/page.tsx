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
import { getWeeklyTaxDue, truncateAddress } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { formatEther } from "viem";
import classNames from "classnames";

const GroupPage = () => {
  const { ethx, cfaV1 } = useAppContracts();
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
            {truncateAddress(adGroup?.beneficiary)}
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
        {listings?.map((listing, index) => {
          const ownerIsBeneficiary =
            listing.listingOwner == adGroup?.beneficiary;

          return (
            <Card
              className={classNames("cursor-pointer", {
                "bg-gray-200": ownerIsBeneficiary,
              })}
              onClick={() => {
                push(`/listing/${listing.listingId}`);
              }}
            >
              <CardHeader>
                <div className="flex flex-row justify-between">
                  <CardTitle>Ad Space #{index + 1}</CardTitle>
                </div>
                <CardDescription>
                  <p>
                    Owner:{" "}
                    {ownerIsBeneficiary
                      ? "_"
                      : truncateAddress(listing.listingOwner)}
                  </p>
                  <p>
                    Streaming Rent:{" "}
                    {!ownerIsBeneficiary
                      ? formatEther(
                          getWeeklyTaxDue(
                            listing.pricePerToken,
                            listing.taxRate
                          )
                        ) + " ETH"
                      : 0}{" "}
                    / week
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default GroupPage;
