"use client";

import { Button } from "@/components/ui/button";
import {
  useReadDirectListingsLogicGetListing,
  useReadErc721OwnerOf,
} from "@/generated";
import { useSmartAccount } from "@/lib/pimlico";
import { useParams } from "next/navigation";
import { formatEther } from "viem";

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

  return (
    <div>
      <h1>Listing: {listing?.listingId}</h1>
      <p>Owner {owner}</p>
      <p>Asset price {listing?.price} ETH</p>
      <p>Tax Rate: {`${listing?.taxRate}% / week`}</p>
      <Button disabled>BUY</Button>
    </div>
  );
};

export default ListingPage;
