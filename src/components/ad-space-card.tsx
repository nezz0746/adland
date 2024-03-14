import classNames from "classnames";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ContractFunctionArgs, formatEther, parseEther } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import { getSimulationArgs, getWeeklyTaxDue } from "@/lib/utils";
import AcquireLeaseActions from "./acquire-lease-actions";
import AdImage from "./ad-image";
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
import {
  adCommonOwnershipAbi,
  useReadAdCommonOwnershipGetAd,
  useSimulateAdCommonOwnershipSetAdUri,
  useSimulateDirectListingsLogicUpdateListing,
} from "@/generated";
import AccountLink from "./account-link";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Input } from "./ui/input";
import { useState } from "react";
import Image from "next/image";
import { uploadFile } from "@/lib/file";
import { ipfsGateway } from "@/lib/constants";
import { Separator } from "./ui/separator";

type AdSpaceCardProps = { listing: Listing; adGroup: AdGroup };

type SetAdURIArgs = ContractFunctionArgs<
  typeof adCommonOwnershipAbi,
  "nonpayable",
  "setAdUri"
>;

const AdSpaceCard = ({
  listing: {
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
  },
  adGroup,
}: AdSpaceCardProps) => {
  const { address } = useAccount();
  const [newPricePerToken, setNewPricePerToken] = useState<number>(
    parseFloat(formatEther(pricePerToken))
  );
  const [image, setImage] = useState<{
    file: File;
    gatewayURL: string;
    url: string;
  } | null>(null);

  const ownerIsBeneficiary = listingOwner === adGroup?.beneficiary;
  const isOwner = address === listingOwner;
  const isBeneficiary = address === adGroup?.beneficiary;
  const spaceNumber = Number(listingId - adGroup.startListingId) + 1;

  const { data: ad, refetch } = useReadAdCommonOwnershipGetAd({
    args: [listingId],
    query: {
      select: (data) => {
        const uri = data.uri === "" ? undefined : data.uri;
        const gatewayURI =
          uri !== undefined
            ? uri.replace("ipfs://", `${ipfsGateway}/`)
            : undefined;

        return {
          ...data,
          uri,
          gatewayURI,
        };
      },
    },
  });

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const hash = await uploadFile(file);

      console.log(hash);

      setImage({
        file,
        url: `ipfs://${hash}`,
        gatewayURL: `${ipfsGateway}/${hash}`,
      });
    }
  };

  const { data: setAdUriRequest } = useSimulateAdCommonOwnershipSetAdUri({
    args: getSimulationArgs<SetAdURIArgs>([listingId, image?.url]),
    query: {
      enabled: image !== null,
    },
  });

  const { writeContractAsync } = useWriteContract();

  const submitAdData = async () => {
    if (!image) return;

    await writeContractAsync(setAdUriRequest!.request);

    refetch();
  };

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

  const selfAssess = async () => {
    writeContractAsync(selfAssessRequest!.request);
  };

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
      <CardContent className="h-[250px] p-4">
        <AdImage uri={ad?.gatewayURI} />
      </CardContent>
      <CardFooter className="flex flex-col justify-end">
        {isOwner && (
          <div className="grid grid-cols-2 gap-2 w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex flex-row gap-2 w-full">
                  <ImagePlusIcon className="w-4 h-4" />
                  Upload new ad
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload new advertising content</DialogTitle>
                </DialogHeader>
                <div className="">
                  {image && (
                    <Image
                      src={image.gatewayURL}
                      alt="Uploaded image"
                      width={200}
                      height={200}
                    />
                  )}
                  <Input
                    className="cursor-pointer hover:bg-slate-100"
                    id="picture"
                    type="file"
                    onChange={onFileChange}
                  />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant={"outline"}>Cancel</Button>
                  </DialogClose>
                  <Button
                    disabled={!Boolean(setAdUriRequest?.request)}
                    onClick={submitAdData}
                  >
                    Upload
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex flex-row gap-2 w-full">
                  <CircleDollarSign className="w-4 h-4" />
                  Self Assess Price
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
                    disabled={!Boolean(selfAssessRequest?.request)}
                    onClick={() => {
                      selfAssess();
                    }}
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
                <AcquireLeaseActions listingId={listingId} />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default AdSpaceCard;
