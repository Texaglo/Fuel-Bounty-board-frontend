/* eslint-disable jsx-a11y/alt-text */
import BountyInformationAcceptedContent from "@/components/BountyInformationAcceptedContent";
import BountyInformationDetails1Content from "@/components/BountyInformationDetails1Content";
import HeroSectionBlock from "@/components/HeroSectionBlock";
import ModalWrapper from "@/components/ModalWrapper";
import TabComponent from "@/components/TabComponent";
import { placeholderImage } from "@/config/constants";
import { TabType } from "@/config/types";
import Image from "next/image";
import { useState } from "react";

const BountyCard = () => {
  const [showAcceptedModal, setShowAcceptedModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <ModalWrapper
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentWrapperClass="lg:w-[980px]"
      >
        <BountyInformationDetails1Content
          onAccept={() => setShowAcceptedModal(true)}
        />
      </ModalWrapper>

      <ModalWrapper
        isOpen={showAcceptedModal}
        onRequestClose={() => setShowAcceptedModal(false)}
        contentWrapperClass="lg:w-[980px]"
      >
        <BountyInformationAcceptedContent />
      </ModalWrapper>
      <div
        onClick={() => setShowModal(true)}
        className="rounded-[18px] overflow-hidden cursor-pointer"
      >
        <Image {...placeholderImage} className="aspect-square" />
      </div>
      <div className="flex justify-center mt-2">
        <button className="__btn py-0.5 rounded-lg">Message</button>
      </div>
    </div>
  );
};

const tabs: TabType[] = [
  {
    title: "kauned-Working",
    tabKey: "kauned-working",
    body: (
      <div className="grid grid-cols-3 gap-10 p-10">
        {[1, 2, 3].map((e) => (
          <BountyCard key={e} />
        ))}
      </div>
    ),
  },
  {
    title: "Awaiting Approval",
    tabKey: "awaiting-approval",
    body: (
      <div className="grid grid-cols-3 gap-10 p-10">
        {[1, 2, 3, 4].map((e) => (
          <BountyCard key={e} />
        ))}
      </div>
    ),
    inavtiveClass: "bg-[#4F5B6E] border-[#4F5B6E]",
  },
  {
    title: "Axxpted",
    tabKey: "axxpted",
    body: (
      <div className="grid grid-cols-3 gap-10 p-10">
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <BountyCard key={e} />
        ))}
      </div>
    ),
  },
];

const Bounties = () => {
  return (
    <div className="mb-20">
      <HeroSectionBlock />
      <div className="container max-w-[calc(980px+40px)] mt-[100px]">
        <h1 className="mb-20 text-center __title_lg">Bounties</h1>

        <TabComponent tabs={tabs} activeTabIndex={2} />

        <div className="flex justify-center mt-20">
          <div className="space-y-9">
            <p className="__title_lg">Earnings : 500 sol</p>
            <p className="__title_lg">Bounties : 10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bounties;
