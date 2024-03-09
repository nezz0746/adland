"use client";

import { Button } from "@/components/ui/button";
import {
  constantFlowAgreementV1Abi,
  directListingsLogicAbi,
  directListingsLogicAddress,
  isethAbi,
  useReadDirectListingsLogicGetListing,
  useReadErc721OwnerOf,
} from "@/generated";
import {
  NATIVE_CURRENCY,
  initialChain,
  superfluidAddresses,
} from "@/lib/constants";
import { useSmartAccount } from "@/lib/pimlico";
import { getWeeklyTaxDue } from "@/lib/utils";
import { useParams } from "next/navigation";
import { Address, encodeFunctionData, formatEther } from "viem";

type Transaction = { to: Address; value: bigint; data: `0x${string}` };

const ListingPage = () => {
  const { smartAccount } = useSmartAccount();
  const { listingId } = useParams();

  const { data: listing, error } = useReadDirectListingsLogicGetListing({
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

  const { data: owner } = useReadErc721OwnerOf({
    address: listing?.assetContract,
    args: [listing?.tokenId ?? BigInt(0)],
    query: {
      enabled: Boolean(listing?.assetContract),
    },
  });

  const buy = async () => {
    if (listing?.pricePerToken === undefined) return;

    const transactions: Transaction[] = [
      // Give marketplace permission to withdraw funds
      {
        to: superfluidAddresses[initialChain.id as 11155111].cfaV1,
        data: encodeFunctionData({
          abi: constantFlowAgreementV1Abi,
          functionName: "authorizeFlowOperatorWithFullControl",
          args: [
            superfluidAddresses[initialChain.id as 11155111].ethx,
            directListingsLogicAddress[initialChain.id as 11155111],
            "0x0",
          ],
        }),
        value: BigInt(0),
      },
      // Upgrade ETH to ETHx
      {
        to: superfluidAddresses[initialChain.id as 11155111].ethx,
        data: encodeFunctionData({
          abi: isethAbi,
          functionName: "upgradeByETH",
          args: undefined,
        }),
        value: getWeeklyTaxDue(listing?.pricePerToken, listing?.taxRateBigInt),
      },
      // Buy from Listing
      {
        to: directListingsLogicAddress[initialChain.id as 11155111],
        data: encodeFunctionData({
          abi: directListingsLogicAbi,
          functionName: "buyFromListing",
          args: [
            listing?.listingIdBigInt,
            smartAccount?.account?.address as Address,
            BigInt(1),
            NATIVE_CURRENCY,
            listing?.pricePerToken,
          ],
        }),
        value: listing?.pricePerToken,
      },
    ];

    const txHash = await smartAccount?.sendTransactions({
      transactions,
    });
  };

  return (
    <div>
      <h1>Listing: {listing?.listingId}</h1>
      <p>Owner {owner}</p>
      <p>Asset price {listing?.price} ETH</p>
      <p>Tax Rate: {`${listing?.taxRate}% / week`}</p>
      <Button
        onClick={() => {
          buy();
        }}
      >
        BUY
      </Button>
    </div>
  );
};

export default ListingPage;
