import { AdGroup, Listings } from "@/lib/types";
import { createContext } from "react";

type AdGroupContext = {
  adGroup: AdGroup;
  listings: Listings;
  refetchAdGroup: () => void;
  refetchListings: () => void;
};

export const GroupLayoutContext = createContext<AdGroupContext>({
  adGroup: {
    beneficiary: "0x0",
    startListingId: BigInt(0),
    endListingId: BigInt(0),
  },
  listings: [],
  refetchAdGroup: () => {},
  refetchListings: () => {},
});
