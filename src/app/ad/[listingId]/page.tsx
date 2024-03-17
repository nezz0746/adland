import { fetchAd } from "@/lib/ad";
import { getGatewayUri } from "@/lib/utils";
import { FrameMetadata } from "@coinbase/onchainkit";

type PageProps = {
  params: { listingId: string };
};

export default async function AdPage({ params: { listingId } }: PageProps) {
  const { metadata } = await fetchAd(listingId);

  const { image, external_url } = metadata;

  return (
    <FrameMetadata
      buttons={
        external_url
          ? [
              {
                action: "link",
                label: "Link",
                target: external_url,
              },
            ]
          : undefined
      }
      image={{
        src: getGatewayUri(image),
        aspectRatio: "1:1",
      }}
    />
  );
}
