"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  directListingsLogicAbi,
  useReadDirectListingsLogicGetListing,
  useReadErc721OwnerOf,
  useSimulateDirectListingsLogicBuyFromListing,
  useWatchDirectListingsLogicNewSaleEvent,
  useWriteIsethUpgradeByEth,
} from "@/generated";
import useAppContracts from "@/hooks/useAppContracts";
import { NATIVE_CURRENCY } from "@/lib/constants";
import { allDefined, getSimulationArgs, getWeeklyTaxDue } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ContractFunctionArgs, formatEther } from "viem";
import { useAccount, useWriteContract } from "wagmi";

type BuyFromListinArgs = ContractFunctionArgs<
  typeof directListingsLogicAbi,
  "payable",
  "buyFromListing"
>;

const ListingPage = () => {
  const { address } = useAccount();
  const { ethx } = useAppContracts();
  const { listingId } = useParams();
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(1);

  const { data: listing, refetch } = useReadDirectListingsLogicGetListing({
    args: [BigInt(parseInt((listingId as string) ?? "0"))],
    query: {
      enabled: listingId !== undefined,
      select: (data) => {
        return {
          ...data,
          listingId: Number(data.listingId),
          listingIdBigInt: data.listingId,
          taxRateBigInt: data.taxRate,
          taxRate: Number(data.taxRate) / 100,
          price: formatEther(data.pricePerToken),
          owner: data.listingCreator,
        };
      },
    },
  });

  const { data: owner, refetch: refetchOwner } = useReadErc721OwnerOf({
    address: listing?.assetContract,
    args: [listing?.tokenId ?? BigInt(0)],
    query: {
      enabled: Boolean(listing?.assetContract),
    },
  });

  const { writeContract: callUpgradeByEth } = useWriteIsethUpgradeByEth();

  const depositRent = (weeks: number) => {
    const price = listing?.pricePerToken;
    const taxRate = listing?.taxRateBigInt;

    if (!taxRate || price === undefined) return;

    callUpgradeByEth({
      address: ethx,
      args: undefined,
      value: getWeeklyTaxDue(price, taxRate) * BigInt(weeks),
    });
  };

  useWatchDirectListingsLogicNewSaleEvent({
    args: {
      listingId: listing?.listingIdBigInt,
    },
    onLogs: () => {
      refetch();
      refetchOwner();
    },
  });

  const { data: buyRequest, error } =
    useSimulateDirectListingsLogicBuyFromListing({
      args: getSimulationArgs<BuyFromListinArgs>([
        listing?.listingIdBigInt,
        address,
        BigInt(1),
        NATIVE_CURRENCY,
        listing?.pricePerToken,
      ]),
      value: listing?.pricePerToken,
      query: {
        enabled:
          allDefined(owner, address, listing?.listingIdBigInt) &&
          address?.toLowerCase() !== owner?.toLowerCase(),
      },
    });

  const { writeContract } = useWriteContract();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Listing: {listing?.listingId}</CardTitle>
        <p>Owner {owner}</p>
        <p>Asset price {listing?.price} ETH</p>
        <p>Tax Rate: {`${listing?.taxRate}% / week`}</p>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-row gap-4">
            <Slider
              defaultValue={[0]}
              max={10}
              step={1}
              onValueChange={(value) => {
                setNumberOfWeeks(value[0]);
              }}
            />
            <Button
              onClick={() => {
                depositRent(numberOfWeeks);
              }}
            >
              Deposit Rent: {numberOfWeeks} weeks
            </Button>
          </div>
          <Button
            disabled={!Boolean(buyRequest?.request)}
            onClick={() => {
              writeContract(buyRequest!.request);
            }}
          >
            Take over lease
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ListingPage;
