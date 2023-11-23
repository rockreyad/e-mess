"use client";
import { Sidebar } from "@/components/Sidebar";
import { sidebarItems } from "@/components/Sidebar/sidebar-item";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { AppShell, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Navbar>
        <Sidebar data={sidebarItems} hidden={!opened} />
      </AppShell.Navbar>
      <AppShell.Header display={"flex"} className="justify-between">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          mr="xl"
        />
        <Text fw={"bold"} size="lg">
          Navbar
        </Text>
        <ThemeSwitcher />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
