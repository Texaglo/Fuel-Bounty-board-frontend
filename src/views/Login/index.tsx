import HeroSectionBlock from "@/components/HeroSectionBlock";
import TabComponent from "@/components/TabComponent";
import { TabType } from "@/config/types";
import LoginTab from "./components/LoginTab";
import LoginTab2 from "./components/LoginTab2";

const tabs: TabType[] = [
  {
    title: "Bounty Hunters",
    tabKey: "bounty-hunters",
    body: <LoginTab />,
  },
  {
    title: "Bounty Posters",
    tabKey: "bounty-posters",
    body: <LoginTab2 />,
  },
];

const Login = () => {
  return (
    <>
      <HeroSectionBlock />
      <div className="container max-w-[calc(1000px+40px)] my-[100px]">
        <h1 className="mb-20 text-center __title_lg">Login</h1>

        <TabComponent tabs={tabs} />
      </div>
    </>
  );
};

export default Login;
