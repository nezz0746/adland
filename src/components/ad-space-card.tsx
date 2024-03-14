import classNames from "classnames";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { getWeeklyTaxDue } from "@/lib/utils";
import AcquireLeaseActions from "./acquire-lease-actions";
import AdPlaceholder from "./ad-placeholder";
import { AdGroup, Listing } from "@/lib/types";
import { Button } from "./ui/button";
import { BadgeDollarSign, CircleDollarSign, ImagePlusIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useReadAdCommonOwnershipGetAd } from "@/generated";
import AccountLink from "./account-link";
import { DialogDescription } from "@radix-ui/react-dialog";

type AdSpaceCardProps = { listing: Listing; adGroup: AdGroup };

const AdSpaceCard = ({ listing, adGroup }: AdSpaceCardProps) => {
  const { address } = useAccount();

  const ownerIsBeneficiary = listing.listingOwner === adGroup?.beneficiary;
  const isOwner = address === listing.listingOwner;
  const spaceNumber = Number(listing.listingId - adGroup.startListingId) + 1;

  const { data: ad } = useReadAdCommonOwnershipGetAd({
    args: [listing.listingId],
  });

  const adURI = ad?.uri;

  return (
    <Card
      className={classNames({
        "bg-gray-200": ownerIsBeneficiary,
      })}
    >
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle>Ad Space #{spaceNumber}</CardTitle>
        </div>
        <CardDescription className="flex flex-row justify-between gap-2">
          <div>
            <p>
              Owner:{" "}
              {ownerIsBeneficiary ? (
                "_"
              ) : (
                <AccountLink address={listing.listingOwner} />
              )}
            </p>
            <p>
              Streaming Rent:{" "}
              {!ownerIsBeneficiary
                ? formatEther(
                    getWeeklyTaxDue(listing.pricePerToken, listing.taxRate)
                  ) + " ETH"
                : 0}{" "}
              / week
            </p>
          </div>
          <div>
            <p className="text-lg">
              Price:{" "}
              <span className="font-bold">
                {formatEther(listing.pricePerToken)} ETH
              </span>
            </p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[250px] p-4">
        {isOwner && <AdPlaceholder />}
      </CardContent>
      <CardFooter className="flex flex-col justify-end">
        {isOwner && (
          <div className="flex flex-row gap-2 w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button disabled className="flex flex-row gap-2 w-full">
                  <ImagePlusIcon className="w-4 h-4" />
                  Upload new ad
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload new advertising content</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant={"outline"}>Cancel</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button disabled className="flex flex-row gap-2 w-full">
                  <CircleDollarSign className="w-4 h-4" />
                  Self Assess Price
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Self Assess</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant={"outline"}>Cancel</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )}
        {!isOwner && (
          <div className="flex flex-row gap-2 w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex flex-row gap-2 w-full">
                  <BadgeDollarSign className="w-4 h-4" />
                  Acquire Lease
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Acquire Lease for ad space #{spaceNumber}
                  </DialogTitle>
                  <DialogDescription>
                    <ul className="list-disc ml-4">
                      <li>Pay the listed price to the current owner</li>
                      <li>Start paying tax to ad group beneficiary</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
                <AcquireLeaseActions listingId={listing.listingId} />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default AdSpaceCard;
