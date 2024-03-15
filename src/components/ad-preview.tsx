import { GetAdReturnType } from "@/lib/types";
import { getGatewayUri } from "@/lib/utils";
import classNames from "classnames";
import Image from "next/image";

const AdPreview = ({ ad }: { ad?: GetAdReturnType }) => {
  if (!ad) return null;

  const { uri, metadata } = ad;

  if (!metadata) return null;

  const { image, animation_url } = metadata;

  const src = uri !== "" ? getGatewayUri(image) : "/logo.jpg";

  return (
    <div className="relative h-full aspect-square m-auto border w-full">
      {!uri && (
        <div className="absolute top-0 left-0 z-[1] w-full h-full flex flex-row justify-center items-center">
          <p className="font-black text-4xl -rotate-45">NO AD</p>
        </div>
      )}
      {animation_url ? (
        <video
          className="h-full w-full object-contain"
          controls
          preload="nonde"
        >
          <source src={getGatewayUri(animation_url)} type="video/mp4"></source>
        </video>
      ) : (
        <Image
          src={src}
          alt=""
          width={400}
          height={400}
          className={classNames("h-full w-full object-contain", {
            "opacity-30": !uri,
          })}
        />
      )}
    </div>
  );
};

export default AdPreview;
