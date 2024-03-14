import { Button } from "./ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ImagePlusIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import useAppContracts from "@/hooks/useAppContracts";
import {
  adCommonOwnershipAbi,
  useReadAdCommonOwnershipGetAd,
  useSimulateAdCommonOwnershipSetAdUri,
  useSimulateDirectListingsLogicUpdateListing,
} from "@/generated";
import { ipfsGateway } from "@/lib/constants";
import { uploadFile } from "@/lib/file";
import { getSimulationArgs } from "@/lib/utils";
import { ContractFunctionArgs, parseEther } from "viem";
import { useWriteContract } from "wagmi";
import { Ad, AdGroup, GetAdReturnType, Listing } from "@/lib/types";

type UpdateAdDataDialogProps = {
  listing: Listing;
  adGroup: AdGroup;
  ad?: GetAdReturnType;
};

type SetAdURIArgs = ContractFunctionArgs<
  typeof adCommonOwnershipAbi,
  "nonpayable",
  "setAdUri"
>;

const UpdateAdDataDialog = ({
  listing: { listingId },
  ad,
  adGroup,
}: UpdateAdDataDialogProps) => {
  const spaceNumber = Number(listingId - adGroup.startListingId) + 1;

  const { adCommonOwnership } = useAppContracts();
  const [description, setDescription] = useState<string>(
    ad?.metadata?.description ?? ""
  );
  const [image, setImage] = useState<{
    file: File;
    gatewayURL: string;
    url: string;
  } | null>(
    ad?.metadata?.image && ad?.gatewayUri
      ? { gatewayURL: ad?.gatewayUri, file: new File([""], ""), url: ad?.uri }
      : null
  );

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const hash = await uploadFile(file);

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

    const metadata: File = new File(
      [
        JSON.stringify({
          name: `Ad Space ${spaceNumber}`,
          description,
          image: image.url,
        }),
      ],
      "metadata.json"
    );

    const hash = await uploadFile(metadata);

    await writeContractAsync({
      abi: adCommonOwnershipAbi,
      address: adCommonOwnership,
      functionName: "setAdUri",
      args: [listingId, `ipfs://${hash}`],
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex flex-row gap-2 w-full">
          <ImagePlusIcon className="w-4 h-4" />
          Update ad content
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload new advertising content</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          {image && (
            <Image
              src={image.gatewayURL}
              alt="Uploaded image"
              width={200}
              height={200}
              className="border w-full"
            />
          )}
          <div className="w-full space-y-2">
            <Label htmlFor="email">Ad Text</Label>
            <Input
              type="text"
              id="description"
              placeholder="Ad Text"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="w-full space-y-2">
            <Label htmlFor="email">Image</Label>
            <Input
              className="cursor-pointer hover:bg-slate-100"
              id="picture"
              type="file"
              onChange={onFileChange}
            />
          </div>
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
  );
};

export default UpdateAdDataDialog;
