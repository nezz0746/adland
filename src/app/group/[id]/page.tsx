"use client";

import {
  useReadAdCommonOwnershipGetAdGroup,
  useReadDirectListingsLogicGetAllListings,
} from "@/generated";
import { useParams, useRouter } from "next/navigation";

const GroupPage = () => {
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

  const { data: listings } = useReadDirectListingsLogicGetAllListings({
    args: adGroup && [adGroup?.startListingId, adGroup?.endListingId],
    query: {
      enabled: isSuccess,
    },
  });

  console.log({ adGroup, listings });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <p>Group ID: {id}</p>
        <div className="flex flex-col items-end">
          <p>{adGroup?.beneficiary}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {listings?.map((listing, index) => (
          <div
            className="border border-black truncate p-2 cursor-pointer"
            onClick={() => {
              push(`/listing/${listing.listingId}`);
            }}
          >
            {listing.assetContract}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupPage;
