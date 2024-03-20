"use client";

import {
  useReadDirectListingsLogicGetAllListings,
  useWatchDirectListingsLogicNewSaleEvent,
  useWatchDirectListingsLogicUpdatedListingEvent,
} from "@/generated";
import AdSpaceCard from "@/components/ad-space-card";
import useAppContracts from "@/hooks/useAppContracts";
import { useContext } from "react";
import { GroupLayoutContext } from "./layout";

const GroupPage = () => {
  const { adCommonOwnership } = useAppContracts();
  const { adGroup, refetchAdGroup } = useContext(GroupLayoutContext);

  const { data: listings, refetch: fetchListings } =
    useReadDirectListingsLogicGetAllListings({
      args: adGroup && [adGroup?.startListingId, adGroup?.endListingId],
    });

  useWatchDirectListingsLogicNewSaleEvent({
    args: {
      assetContract: adCommonOwnership,
    },
    onLogs: () => {
      fetchListings();
    },
  });

  useWatchDirectListingsLogicUpdatedListingEvent({
    args: {
      assetContract: adCommonOwnership,
    },
    onLogs: () => {
      refetchAdGroup();
      fetchListings();
    },
  });

  return (
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2">
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
  );
};

export default GroupPage;
