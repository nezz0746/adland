"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  directListingsLogicAbi,
  useReadErc721OwnerOf,
  useReadSuperTokenBalanceOf,
  useSimulateDirectListingsLogicBuyFromListing,
  useWriteIsethUpgradeByEth,
} from "@/generated";
import useAppContracts from "@/hooks/useAppContracts";
import { NATIVE_CURRENCY } from "@/lib/constants";
import { allDefined, getSimulationArgs, getWeeklyTaxDue } from "@/lib/utils";
import { useState } from "react";
import { ContractFunctionArgs, formatEther } from "viem";
import {
  useAccount,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { format, addWeeks } from "date-fns";
import { Listing } from "@/lib/types";

type BuyFromListinArgs = ContractFunctionArgs<
  typeof directListingsLogicAbi,
  "payable",
  "buyFromListing"
>;

const AcquireLeaseActions = ({ listing }: { listing: Listing }) => {
  const { listingId, taxRate, pricePerToken, assetContract, tokenId } = listing;
  const { address } = useAccount();
  const { ethx } = useAppContracts();
  const [numberOfWeeks, setNumberOfWeeks] = useState<number>(1);

  const { data: ethXBalane } = useReadSuperTokenBalanceOf({
    address: ethx,
    args: address && [address],
  });

  const { data: ethBalance } = useBalance({
    address: address,
  });

  console.log(ethBalance);

  const { data: owner } = useReadErc721OwnerOf({
    address: assetContract,
    args: [tokenId],
  });

  const { writeContract: callUpgradeByEth } = useWriteIsethUpgradeByEth();

  const depositRent = (weeks: number) => {
    const price = pricePerToken;

    if (!taxRate || price === undefined) return;

    callUpgradeByEth({
      address: ethx,
      args: undefined,
      value: getWeeklyTaxDue(price, taxRate) * BigInt(weeks),
    });
  };

  const { data: buyRequest } = useSimulateDirectListingsLogicBuyFromListing({
    args: getSimulationArgs<BuyFromListinArgs>([
      listingId,
      address,
      BigInt(1),
      NATIVE_CURRENCY,
      pricePerToken,
    ]),
    value: pricePerToken,
    query: {
      enabled:
        allDefined(owner, address, listingId) &&
        address?.toLowerCase() !== owner?.toLowerCase(),
    },
  });

  const { data: hash, writeContract, isPending } = useWriteContract();

  const { isLoading } = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: Boolean(hash),
    },
  });

  const takoverLoading = isPending || isLoading;

  const numberOfWeeksAvailable = Number(
    (ethXBalane ?? BigInt(0)) / getWeeklyTaxDue(pricePerToken, taxRate) ?? 0
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      <p>Balance: {formatEther(ethXBalane ?? BigInt(0))} ETHx</p>
      <p>
        Weekly Tax Due:{" "}
        {formatEther(
          getWeeklyTaxDue(pricePerToken ?? BigInt(0), taxRate ?? BigInt(0))
        )}{" "}
        ETHx
      </p>
      <p>
        Current balance covers tax until{" "}
        {format(addWeeks(Date.now(), numberOfWeeksAvailable), "MMM d, yyyy")} (
        {numberOfWeeksAvailable} weeks)
      </p>
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
      <p>Balance {Number(formatEther(ethBalance?.value ?? BigInt(0)))} ETH</p>
      <Button
        disabled={!Boolean(buyRequest?.request) || takoverLoading}
        onClick={() => {
          writeContract(buyRequest!.request);
        }}
        loading={takoverLoading}
      >
        Take over lease ({formatEther(pricePerToken)} ETH)
      </Button>
    </div>
  );
};

export default AcquireLeaseActions;
