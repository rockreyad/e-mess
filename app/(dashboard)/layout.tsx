"use client";
import { Sidebar } from "@/components/Sidebar";
import { sidebarItems } from "@/components/Sidebar/sidebar-item";
import { AppShell, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
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
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          mr="xl"
        />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer>
        <Text w="full" size="sm" c="gray">
          CopyRight © 2023 e-mess
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
