import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  return (
    <div>
      <div className="min-h-screen pt-10 xl:pl-52 xl:pt-16">{children}</div>
    </div>
  );
}
