import { fetchAd } from "@/lib/ad";
import { getAR, getGatewayUri } from "@/lib/utils";
import { FrameMetadata } from "@coinbase/onchainkit";

type PageProps = {
  params: { listingId: string };
};

export default async function AdPage({ params: { listingId } }: PageProps) {
  const { metadata } = await fetchAd(listingId);

  if (!metadata) return null;

  const { image, external_url, aspect_ratio: ar } = metadata;

  const aspectRatio = getAR(ar);

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
        aspectRatio,
      }}
    />
  );
}
