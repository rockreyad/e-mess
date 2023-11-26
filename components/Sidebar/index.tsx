import React, { FC } from "react";
import { Sidebar as ISidebar } from "./sidebar.schema";

interface SidebarProps {
  data: ISidebar;
  hidden?: boolean;
}
export const Sidebar: FC<SidebarProps> = ({ data }) => {
  const links = data.map((item) => <li key={item.id}></li>);

  return <div>{links}</div>;
};
