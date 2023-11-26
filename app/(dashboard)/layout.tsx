import { Sidebar } from "@/components/Sidebar";
import { sidebarItems } from "@/components/Sidebar/sidebar-item";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar data={sidebarItems} />

      {/* Content */}
      {children}
    </div>
  );
}
