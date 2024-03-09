"use client";

import { useReadAdCommonOwnershipGetAdGroup } from "@/generated";
import { useParams } from "next/navigation";

const GroupPage = () => {
  const { id } = useParams();

  const { data: adGroup } = useReadAdCommonOwnershipGetAdGroup({
    args: [BigInt(parseInt(id as string))],
    query: {
      enabled: id !== undefined,
      select: (data) => ({
        beneficiary: data.beneficiary,
        startListingId: data.startListingId,
        endListingId: data.endListingId,
        size: Number(data.endListingId - data.startListingId),
      }),
    },
  });

  return (
    <div>
      GroupPage
      <p>{id}</p>
      <p>{adGroup?.beneficiary}</p>
      <p>{adGroup?.size}</p>
    </div>
  );
};

export default GroupPage;
