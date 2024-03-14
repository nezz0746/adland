import Image from "next/image";

const AdPlaceholder = () => {
  return (
    <div className="relative h-full aspect-square m-auto">
      <div className="absolute top-0 left-0 z-[1] w-full h-full flex flex-row justify-center items-center">
        <p className="font-black text-4xl -rotate-45">NO AD</p>
      </div>
      <Image
        src={"/logo.jpg"}
        alt=""
        width={400}
        height={400}
        className="opacity-30 h-full w-full object-contain"
      />
    </div>
  );
};

export default AdPlaceholder;
