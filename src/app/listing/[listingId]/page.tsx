"use client";

import { Button } from "@/components/ui/button";
import {
  cfAv1ForwarderAbi,
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
import { bundler } from "@/lib/pimlico.config";
import { getExplorerLink, getWeeklyTaxDue } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Address, encodeFunctionData, formatEther } from "viem";

type Transaction = { to: Address; value: bigint; data: `0x${string}` };

const ListingPage = () => {
  const { smartAccount } = useSmartAccount();
  const { listingId } = useParams();
  const [txHash, setTxHash] = useState<string | undefined>(undefined);

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

  console.log({ price: listing?.pricePerToken, owner });

  const buy = async () => {
    if (listing?.pricePerToken === undefined) return;

    const ssaAddress = smartAccount?.account?.address as Address;
    const listingId = listing?.listingIdBigInt;
    const price = listing?.pricePerToken;
    const taxRate = listing?.taxRateBigInt;

    const cfaV1 = superfluidAddresses[initialChain.id as 11155111].cfaV1;
    const ethx = superfluidAddresses[initialChain.id as 11155111].ethx;
    const marketplace = directListingsLogicAddress[initialChain.id as 11155111];

    const transactions: Transaction[] = [
      // Give marketplace permission to withdraw funds
      {
        to: cfaV1,
        data: encodeFunctionData({
          abi: cfAv1ForwarderAbi,
          functionName: "grantPermissions",
          args: [ethx, marketplace],
        }),
        value: BigInt(0),
      },
      // Upgrade ETH to ETHx
      {
        to: ethx,
        data: encodeFunctionData({
          abi: isethAbi,
          functionName: "upgradeByETH",
          args: undefined,
        }),
        value: getWeeklyTaxDue(price, taxRate),
      },
      // Buy from Listing
      {
        to: marketplace,
        data: encodeFunctionData({
          abi: directListingsLogicAbi,
          functionName: "buyFromListing",
          args: [listingId, ssaAddress, BigInt(1), NATIVE_CURRENCY, price],
        }),
        value: price,
      },
    ];

    console.log({ transactions });

    const { fast } = await bundler.getUserOperationGasPrice();

    const txHash = await smartAccount?.sendTransactions({
      transactions,
      maxFeePerGas: fast.maxFeePerGas,
      maxPriorityFeePerGas: fast.maxPriorityFeePerGas,
    });

    setTxHash(txHash);
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
      {txHash && (
        <Link target="_blank" href={getExplorerLink(txHash, "tx")}>
          Transaction Hash: {txHash}
        </Link>
      )}
    </div>
  );
};

export default ListingPage;
