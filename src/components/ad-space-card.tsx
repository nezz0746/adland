import classNames from "classnames";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatEther, parseEther } from "viem";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { getWeeklyTaxDue } from "@/lib/utils";
import AcquireLeaseActions from "./acquire-lease-actions";
import AdPreview from "./ad-preview";
import { AdGroup, GetAdReturnType, Listing } from "@/lib/types";
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
import { useSimulateDirectListingsLogicUpdateListing } from "@/generated";
import AccountLink from "./account-link";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Input } from "./ui/input";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { useQuery } from "@tanstack/react-query";
import UpdateAdDataDialog from "./UpdateAdDataDialog";
import { Skeleton } from "./ui/skeleton";

type AdSpaceCardProps = { listing: Listing; adGroup: AdGroup };

const AdSpaceCard = ({ listing, adGroup }: AdSpaceCardProps) => {
  const {
    assetContract,
    tokenId,
    quantity,
    currency,
    taxRate,
    taxBeneficiary,
    startTimestamp,
    endTimestamp,
    pricePerToken,
    reserved,
    listingId,
    listingOwner,
  } = listing;
  const { address } = useAccount();
  const [newPricePerToken, setNewPricePerToken] = useState<number>(
    parseFloat(formatEther(pricePerToken))
  );
  const { data: ad, isLoading } = useQuery<GetAdReturnType>({
    queryKey: ["ad-" + Number(listingId).toString()],
    queryFn: () =>
      fetch(`/api/ad/${Number(listingId)}`).then((res) => res.json()),
  });

  const ownerIsBeneficiary = listingOwner === adGroup?.beneficiary;
  const isOwner = address === listingOwner;
  const isBeneficiary = address === adGroup?.beneficiary;
  const spaceNumber = Number(listingId - adGroup.startListingId) + 1;

  const { data: selfAssessRequest } =
    useSimulateDirectListingsLogicUpdateListing({
      args: [
        listingId,
        {
          tokenId,
          assetContract,
          quantity,
          currency,
          taxRate,
          taxBeneficiary,
          pricePerToken: parseEther(newPricePerToken.toString()),
          startTimestamp,
          endTimestamp,
          reserved,
        },
      ],
    });

  const { data: hash, writeContract, isPending } = useWriteContract();

  const { isLoading: selfAssessmentLoading } = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: Boolean(hash),
    },
  });

  const selfAssess = async () => {
    writeContract(selfAssessRequest!.request);
  };

  const assessmentLoading = isPending || selfAssessmentLoading;

  return (
    <Card className={classNames({ "bg-gray-200": ownerIsBeneficiary })}>
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle>Ad Space #{spaceNumber}</CardTitle>
          <p className="text-lg">
            Price:{" "}
            <span className="font-bold">{formatEther(pricePerToken)} ETH</span>
          </p>
        </div>
        <Separator />
        <CardDescription className="flex flex-row justify-between gap-2">
          <div>
            <p>
              Owner:{" "}
              {ownerIsBeneficiary ? (
                "_"
              ) : (
                <AccountLink address={listingOwner} />
              )}
            </p>
            <p>
              Streaming Rent:{" "}
              {!ownerIsBeneficiary
                ? formatEther(getWeeklyTaxDue(pricePerToken, taxRate)) + " ETH"
                : 0}{" "}
              / week
            </p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        {isLoading && <Skeleton className="h-full w-full border" />}
        {ad?.metadata && <AdPreview ad={ad} />}
      </CardContent>
      <CardFooter className="flex flex-col justify-end">
        {isOwner && (
          <div className="grid grid-cols-2 gap-2 w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  disabled={isLoading}
                  className="flex flex-row gap-2 w-full"
                >
                  <ImagePlusIcon className="w-4 h-4" />
                  Update ad content
                </Button>
              </DialogTrigger>
              {ad && (
                <UpdateAdDataDialog
                  listing={listing}
                  adGroup={adGroup}
                  ad={ad}
                />
              )}
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex flex-row gap-2 w-full">
                  <CircleDollarSign className="w-4 h-4" />
                  Update price
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Self Assess</DialogTitle>
                </DialogHeader>
                <div>
                  <Input
                    type="number"
                    value={newPricePerToken}
                    defaultValue={parseFloat(formatEther(pricePerToken))}
                    onChange={(e) =>
                      setNewPricePerToken(Number(e.target.value))
                    }
                  />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant={"outline"}>Cancel</Button>
                  </DialogClose>
                  <Button
                    disabled={
                      !Boolean(selfAssessRequest?.request) || assessmentLoading
                    }
                    onClick={() => {
                      selfAssess();
                    }}
                    loading={assessmentLoading}
                  >
                    Reassess
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )}
        {!isOwner && (
          <div className="flex flex-row gap-2 w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  disabled={isBeneficiary}
                  className="flex flex-row gap-2 w-full"
                >
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
                <AcquireLeaseActions listing={listing} />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default AdSpaceCard;
