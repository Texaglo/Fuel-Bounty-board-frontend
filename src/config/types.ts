import { ReactNode } from "react";

export type TabType = {
  title: string;
  tabKey: string;
  body: ReactNode;
  inavtiveClass?: string;
  activeClass?: string;
};
export type TabComponentProps = {
  tabs: TabType[];
  activeTabIndex?: number;
};
