"use client";

import {
  useReadAdCommonOwnershipGetAdGroup,
  useReadDirectListingsLogicGetAllListings,
  useWatchDirectListingsLogicNewSaleEvent,
} from "@/generated";
import { useParams } from "next/navigation";
import AdSpaceCard from "@/components/ad-space-card";
import useAppContracts from "@/hooks/useAppContracts";

const GroupPage = () => {
  const { id } = useParams();
  const { adCommonOwnership } = useAppContracts();

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

  const { data: listings, refetch } = useReadDirectListingsLogicGetAllListings({
    args: adGroup && [adGroup?.startListingId, adGroup?.endListingId],
    query: {
      enabled: isSuccess,
    },
  });

  useWatchDirectListingsLogicNewSaleEvent({
    args: {
      assetContract: adCommonOwnership,
    },
    onLogs: () => {
      refetch();
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
