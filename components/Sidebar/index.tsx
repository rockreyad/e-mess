import { ScrollArea } from "@mantine/core";
import React, { FC } from "react";
import { SidebarLinksGroup } from "./sidebar-links-group";
import { Sidebar as ISidebar } from "./sidebar.schema";

interface SidebarProps {
  data: ISidebar;
  hidden?: boolean;
}
export const Sidebar: FC<SidebarProps> = ({ data }) => {
  const links = data.map((item) => (
    <SidebarLinksGroup key={item.label} {...item} />
  ));

  return (
    <ScrollArea>
      <div>{links}</div>
    </ScrollArea>
  );
};
