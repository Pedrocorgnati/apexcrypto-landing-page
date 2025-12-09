import { images } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Generating = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("flex h-14 items-center rounded-[1.7rem] bg-n-8/80 px-6 text-base", className)}
    >
      <Image src={images.loading} className="mr-4 size-5" alt="loading" width={20} height={20} />
      ApexCrypto AI is analyzing the market
    </div>
  );
};

export default Generating;
