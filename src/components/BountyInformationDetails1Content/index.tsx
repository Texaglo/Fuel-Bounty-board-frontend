/* eslint-disable jsx-a11y/alt-text */
import { placeholderImage } from "@/config/constants";
import Image from "next/image";

const BountyInformationDetails1Content = ({
  onAccept,
}: {
  onAccept: () => void;
}) => {
  return (
    <>
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
            <h3 className="__title_lg"> Details</h3>
            <div className="space-y-4 mt-14">
              <div className="grid grid-cols-[140px,auto] gap-2">
                <div className="__gray_box">Wallet</div>
                <p className="flex items-center font-semibold capitalize">
                  Adfd…..Dsad
                </p>
              </div>
              <div className="grid grid-cols-[140px,auto] gap-2">
                <div className="__gray_box">Deadline</div>
                <p className="flex items-center font-semibold capitalize">
                  March 4th 2023
                </p>
              </div>
              <div className="grid grid-cols-[140px,auto] gap-2">
                <div className="__gray_box">Bounty title</div>
                <p className="flex items-center font-semibold capitalize">
                  Smart Contract Music Creation
                </p>
              </div>
              <div className="grid grid-cols-[140px,auto] gap-2">
                <div>
                  <div className="__gray_box">Bounty description</div>
                </div>
                <p className="flex items-center font-medium capitalize max-w-[300px]">
                  We need a smart contract for creating uploading music to the
                  Solana blockchain
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <div className="w-full px-3 __btn py-2.5 outline white">
                Deposit:{" "}
                <input
                  type="text"
                  className="deposite_input"
                  defaultValue={"1500"}
                />
              </div>
              <button className="w-full px-3 __btn py-2.5" onClick={onAccept}>
                Accept
              </button>
              <button className="w-full px-3 __btn py-2.5">Decline</button>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="space-y-3.5 font-semibold capitalize">
              <p>time remaining</p>
              <p className="text-[#FE0707]">00:20:00:00</p>
            </div>
          </div>
        </div>

        <p className="max-w-[760px] capitalize leading-[32px] mx-auto font-semibold mt-12">
          while you are on this modal the bounty will be in Pending Claimed
          status if you do not |want the bounty and your reputation to stay in
          good standing, then accept and completethe job or decline and allow
          another developer to work on it
        </p>
      </div>
    </>
  );
};

export default BountyInformationDetails1Content;
