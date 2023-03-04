/* eslint-disable jsx-a11y/alt-text */
import BountyInformationDetails2Content from "@/components/BountyInformationDetails2Content";
import GradientLine from "@/components/Icons/GradientLine";
import ModalWrapper from "@/components/ModalWrapper";
import { placeholderImage } from "@/config/constants";
import Image from "next/image";
import { useState } from "react";

const names = [
  "Bounty 1",
  "Bounty 2",
  "Bounty 3",
  "Bounty 4",
  "Bounty 5",
  "Bounty 6",
  "Bounty 7",
  "Bounty 8",
];
const BountyNameCard = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [activeNameIndex, setActiveNameIndex] = useState(0);

  const nextName = () => {
    setActiveNameIndex((prev) => {
      return prev + 1 >= names.length ? names.length - 1 : prev + 1;
    });
  };
  const prevName = () => {
    setActiveNameIndex((prev) => {
      return prev - 1 < 0 ? 0 : prev - 1;
    });
  };
  return (
    <div className="bg-[#272D37] rounded-3xl -translate-y-[50px]">
      <div className="p-[50px]">
        <div className="overflow-hidden aspect-square rounded-2xl">
          <Image {...placeholderImage} className="aspect-square" />
        </div>

        <div>
          <div className="flex items-center justify-between mt-[70px] ">
            <button onClick={prevName}>
              <Image src={"/img/end.png"} width={50} height={50} alt="End" />
            </button>
            <h1 className="__title_lg">{names[activeNameIndex]}</h1>
            <button onClick={nextName}>
              <Image
                src={"/img/start.png"}
                width={50}
                height={50}
                alt="Start"
              />
            </button>
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
            <button
              className="w-full __btn"
              onClick={() => setShowDetailsModal(true)}
            >
              Details
            </button>

            <ModalWrapper
              isOpen={showDetailsModal}
              contentWrapperClass="lg:!w-[980px]"
              onRequestClose={() => setShowDetailsModal(false)}
            >
              <BountyInformationDetails2Content />
            </ModalWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BountyNameCard;
