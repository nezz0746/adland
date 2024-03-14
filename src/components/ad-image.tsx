import classNames from "classnames";
import Image from "next/image";

const AdImage = ({ uri }: { uri?: string }) => {
  const src = uri ? uri : "/logo.jpg";

  return (
    <div className="relative h-full aspect-square m-auto">
      {!uri && (
        <div className="absolute top-0 left-0 z-[1] w-full h-full flex flex-row justify-center items-center">
          <p className="font-black text-4xl -rotate-45">NO AD</p>
        </div>
      )}
      <Image
        src={src}
        alt=""
        width={400}
        height={400}
        className={classNames("h-full w-full object-contain", {
          "opacity-30": !uri,
        })}
      />
    </div>
  );
};

export default AdImage;
