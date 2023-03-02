import { TabComponentProps } from "@/config/types";
import { cx } from "@/utils";
import { useState } from "react";

const TabComponent = ({ tabs, activeTabIndex = 0 }: TabComponentProps) => {
  const [activeTab, setActiveTab] = useState(tabs[activeTabIndex]);
  return (
    <div>
      <div className="flex">
        {tabs.map((tab, i) => {
          const isActive = tab.tabKey === activeTab.tabKey;
          return (
            <button
              className={cx(
                "w-full py-5 rounded-t-[10px] outline-none border-2 text-center text-white font-semibold",
                isActive
                  ? cx(tab.activeClass || "border-[#272D37] bg-[#272D37]")
                  : cx(tab.inavtiveClass || "border-[#51408D]"),
              )}
              onClick={() => setActiveTab(tab)}
              key={i}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <div className="bg-[#272D37] rounded-b-[10px] overflow-hidden">
        {activeTab.body}
      </div>
    </div>
  );
};

export default TabComponent;
