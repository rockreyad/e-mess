import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Sidebar */}
      <ThemeSwitcher />
      {/* Content */}
      {children}
    </div>
  );
}
