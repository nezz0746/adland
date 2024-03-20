"use client";

import {
  useWatchDirectListingsLogicNewSaleEvent,
  useWatchDirectListingsLogicUpdatedListingEvent,
} from "@/generated";
import AdSpaceCard from "@/components/ad-space-card";
import useAppContracts from "@/hooks/useAppContracts";
import { useContext } from "react";
import { GroupLayoutContext } from "./context";

const GroupPage = () => {
  const { adCommonOwnership } = useAppContracts();
  const { adGroup, listings, refetchAdGroup, refetchListings } =
    useContext(GroupLayoutContext);

  useWatchDirectListingsLogicNewSaleEvent({
    args: {
      assetContract: adCommonOwnership,
    },
    onLogs: () => {
      refetchListings();
    },
  });

  useWatchDirectListingsLogicUpdatedListingEvent({
    args: {
      assetContract: adCommonOwnership,
    },
    onLogs: () => {
      refetchAdGroup();
      refetchListings();
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
