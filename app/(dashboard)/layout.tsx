import { Sidebar } from "@/components/Sidebar";
import { sidebarItems } from "@/components/Sidebar/sidebar-item";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar data={sidebarItems} />
      <ThemeSwitcher />
      {/* Content */}
      {children}
    </div>
  );
}
