/* eslint-disable jsx-a11y/alt-text */
import ShareIcon from "@/components/Icons/ShareIcon";
import TabComponent from "@/components/TabComponent";
import { placeholderImage } from "@/config/constants";
import { TabType } from "@/config/types";
import Image from "next/image";

const BountyCard = ({ title }: { title: string }) => {
  return (
    <div className="grid grid-cols-[150px,auto] gap-8">
      <div className="rounded-[10px] overflow-hidden">
        <Image {...placeholderImage} className="aspect-square" />
      </div>

      <div>
        <div className="flex justify-between">
          <h3 className="text-[38px] leading-[36px] font-red-rose text-white">
            {title}
          </h3>
          <button>
            <ShareIcon />
          </button>
        </div>
        <p className="text-[14px] text-[#F2F2F2] leading-[22px] mt-0.5">
          Gate description gate description description gate description
          description gate description description gate description description
          gate description description gate description
        </p>
      </div>
    </div>
  );
};

const tabs: TabType[] = [
  {
    title: "Open Bounties",
    tabKey: "open-bounties",
    body: (
      <div className="p-5 space-y-5">
        {[1, 2, 3, 4, 5].map((e) => (
          <BountyCard title={`Bounty ${e}`} key={e} />
        ))}
      </div>
    ),
  },
  {
    title: "Sponsored",
    tabKey: "sponsored",
    body: (
      <div className="p-5 space-y-5">
        {[6, 7, 8].map((e) => (
          <BountyCard title={`Bounty ${e}`} key={e} />
        ))}
      </div>
    ),
  },
];

const BountyBoardCard = () => {
  return (
    <div className="mt-12">
      <h2 className="__title_lg">Bounty Board</h2>

      <div className="mt-20">
        <TabComponent tabs={tabs} />
      </div>
    </div>
  );
};

export default BountyBoardCard;
