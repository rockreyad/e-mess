import { RiHome2Line } from "react-icons/ri";
import { Sidebar } from "./sidebar.schema";

export const sidebarItems: Sidebar = [
  {
    id: "overview",
    label: "Overview",
    path: "/",
    icon: RiHome2Line,
    activeIcon: "home",
    isActive: true,
  },
];
