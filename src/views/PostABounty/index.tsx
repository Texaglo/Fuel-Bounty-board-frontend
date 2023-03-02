import HeroSectionBlock from "@/components/HeroSectionBlock";
import TabComponent from "@/components/TabComponent";
import { TabType } from "@/config/types";
import GoldGoldBountiesTab from "./components/GoldGoldBountiesTab";

const tabs: TabType[] = [
  {
    title: "Bronze Bounties",
    tabKey: "bronze-bounties",
    body: <GoldGoldBountiesTab />,
  },
  {
    title: "Silver Bounties",
    tabKey: "silver-bounties",
    body: <GoldGoldBountiesTab />,
  },
  {
    title: "Gold Gold Bounties",
    tabKey: "gold-gold-bounties",
    body: <GoldGoldBountiesTab />,
  },
];

const PostABounty = () => {
  return (
    <>
      <HeroSectionBlock />
      <div className="container max-w-[calc(1000px+40px)] my-[100px]">
        <h1 className="mb-20 text-center __title_lg">Post a Bounty</h1>

        <TabComponent tabs={tabs} />
      </div>
    </>
  );
};

export default PostABounty;
