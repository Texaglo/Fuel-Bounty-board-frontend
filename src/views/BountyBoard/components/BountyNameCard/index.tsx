/* eslint-disable jsx-a11y/alt-text */
import GradientLine from "@/components/Icons/GradientLine";
import { placeholderImage } from "@/config/constants";
import Image from "next/image";

const BountyNameCard = () => {
  return (
    <div className="bg-[#272D37] rounded-3xl -translate-y-[50px]">
      <div className="p-[50px]">
        <div className="overflow-hidden aspect-square rounded-2xl">
          <Image {...placeholderImage} className="aspect-square" />
        </div>

        <div>
          <div className="flex items-center justify-between mt-[70px] ">
            <Image src={"/img/end.png"} width={50} height={50} alt="End" />
            <h1 className="__title_lg">Bounty Name</h1>
            <Image src={"/img/start.png"} width={50} height={50} alt="Start" />
          </div>

          <div className="my-14">
            <GradientLine />
          </div>

          <p className="text-[14px] text-[#F2F2F2] leading-[22px]">
            Gate description gate description description gate description
            description gate description description gate description
            description gate description description gate description
            <br />
            <br />
            description gateGate description gate description description gate
            description description gate description description gate
            description description gate description description gate
            description description gateGate description gate description
            <br />
            <br />
            description gate description description gate description
            description gate description description gate descriptio description
          </p>

          <div className="flex gap-6 mt-12">
            <button className="w-full __btn outline">Message Owner</button>
            <button className="w-full __btn">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyNameCard;
