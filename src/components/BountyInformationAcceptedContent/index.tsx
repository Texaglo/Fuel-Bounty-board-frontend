/* eslint-disable jsx-a11y/alt-text */
import { placeholderImage } from "@/config/constants";
import Image from "next/image";

const BountyInformationAcceptedContent = () => {
  return (
    <div className="bg-[#272D37] p-10 rounded-3xl overflow-hidden">
      <div className="grid grid-cols-[210px,auto,180px]">
        <div>
          <p className="text-sm font-medium text-center">
            Avatar Image & Color
          </p>
          <div className="rounded-[18px] overflow-hidden mt-1">
            <Image {...placeholderImage} className="aspect-square" />
          </div>
        </div>
        <div className="ml-[60px] mt-[100px]">
          <h3 className="__title_lg">Accepted</h3>
          <div className="space-y-4 mt-14">
            <div className="flex justify-between gap-2">
              <p className="flex items-center font-semibold capitalize">
                Connect your github
              </p>
              <button className="__gray_box w-[140px]">Connect</button>
            </div>
            <div className="flex justify-between gap-2">
              <p className="flex items-center font-semibold capitalize">
                Connect wallet to get paid
              </p>
              <button className="__gray_box w-[140px]">Connect Wallet</button>
            </div>
          </div>
          <div className="flex justify-between gap-4 mt-4">
            <div className="px-5 __btn py-2.5 outline white">
              Deposit:{" "}
              <input
                type="text"
                className="deposite_input"
                defaultValue={"1500"}
              />
            </div>
            <button className="__btn py-2.5">Start</button>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="space-y-3.5 font-semibold capitalize">
            <p>time remaining</p>
            <p className="text-[#FE0707]">00:20:00:00</p>
            <button className="__btn py-2.5 px-6">Give Up</button>
          </div>
        </div>
      </div>

      <p className="max-w-[760px] capitalize leading-[32px] mx-auto font-semibold mt-12">
        while you are on this modal the bounty will be in Pending Claimed status
        if you do not |want the bounty and your reputation to stay in good
        standing, then accept and completethe job or decline and allow another
        developer to work on it
      </p>
    </div>
  );
};

export default BountyInformationAcceptedContent;
