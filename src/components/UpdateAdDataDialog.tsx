import { Button } from "./ui/button";
import Image from "next/image";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import useAppContracts from "@/hooks/useAppContracts";
import {
  adCommonOwnershipAbi,
  useSimulateAdCommonOwnershipSetAdUri,
} from "@/generated";
import { ipfsGateway } from "@/lib/constants";
import { uploadFile } from "@/lib/file";
import { getGatewayUri, getSimulationArgs } from "@/lib/utils";
import { ContractFunctionArgs } from "viem";
import { useWriteContract } from "wagmi";
import { AdGroup, GetAdReturnType, Listing, Metadata } from "@/lib/types";
import { queryClient } from "@/app/providers";
import { toast } from "sonner";

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
  console.log(ad?.metadata);
  const { adCommonOwnership } = useAppContracts();
  const [description, setDescription] = useState<string>(
    ad?.metadata?.description ?? ""
  );
  const [externalUrl, setExternalUrl] = useState<string>(
    ad?.metadata?.external_url ?? ""
  );

  const [image, setImage] = useState<{
    url: string;
    type: "video" | "image";
  } | null>(
    ad?.metadata?.image && ad?.gatewayUri
      ? {
          url: getGatewayUri(
            ad?.metadata?.animation_url
              ? ad?.metadata?.animation_url
              : ad?.metadata?.image
          ),
          type: ad?.metadata?.animation_url ? "video" : "image",
        }
      : null
  );

  const spaceNumber = Number(listingId - adGroup.startListingId) + 1;

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const hash = await uploadFile(file);

      setImage({
        url: `${ipfsGateway}/${hash}`,
        type: file.type.includes("video") ? "video" : "image",
      });
    }
  };

  const { data: setAdUriRequest } = useSimulateAdCommonOwnershipSetAdUri({
    args: getSimulationArgs<SetAdURIArgs>([listingId, image?.url]),
    query: {
      enabled: image !== null,
    },
  });

  const { writeContractAsync } = useWriteContract({});

  const submitAdData = async () => {
    if (!image) return;

    const s = image.url.split("/");
    const imageHash = s[s.length - 1];
    const data: Metadata = {
      name: `Ad Space #${spaceNumber}`,
      description,
      image: `ipfs://${imageHash}`,
    };

    if (image.type === "video") {
      data.animation_url = `ipfs://${imageHash}`;
    }
    if (externalUrl !== "") {
      data.external_url = externalUrl;
    }

    const metadata: File = new File([JSON.stringify(data)], "metadata.json");
    const hash = await uploadFile(metadata);
    const adIpfsURI = `ipfs://${hash}`;

    await writeContractAsync(
      {
        abi: adCommonOwnershipAbi,
        address: adCommonOwnership,
        functionName: "setAdUri",
        args: [listingId, adIpfsURI],
      },
      {
        onSuccess: () => {
          queryClient.setQueryData(
            ["ad-" + Number(listingId).toString()],
            () => {
              return {
                uri: adIpfsURI,
                gatewayUri: getGatewayUri(adIpfsURI),
                metadata: data,
              };
            }
          );
          toast.success("Ad updated successfully");
        },
      }
    );
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Upload new advertising content</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-3">
        {image &&
          (image.type === "video" ? (
            <video className="w-full" controls preload="nonde">
              <source src={image.url} type="video/mp4"></source>
            </video>
          ) : (
            <Image
              src={image.url}
              alt="Uploaded image"
              width={200}
              height={200}
              className="border w-full"
            />
          ))}
        <div className="w-full space-y-2">
          <Label htmlFor="email">Ad Text</Label>
          <Input
            type="text"
            id="description"
            placeholder="Ad Text"
            defaultValue={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="w-full space-y-2">
          <Label htmlFor="email">Link</Label>
          <Input
            type="text"
            id="external_url"
            placeholder="Ad Link"
            defaultValue={externalUrl}
            onChange={(e) => {
              setExternalUrl(e.target.value);
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
  );
};

export default UpdateAdDataDialog;
