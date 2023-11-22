"use client";

import { Box, Collapse, Group, ThemeIcon, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { SidebarItem } from "./sidebar.schema";
import { cn } from "@/lib/utils";

export function SidebarLinksGroup({
  icon: Icon,
  label,
  path: link,
  initiallyOpened,
  children: links,
}: SidebarItem) {
  const pathname = usePathname();

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => {
    return (
      <Link
        href={link.path}
        key={link.label}
        className={cn("bg-green-50", {
          "bg-green-200": link.path === pathname,
        })}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <>
      {link ? (
        <Link
          href={link}
          className={cn("bg-green-50", {
            "bg-green-200": link === pathname,
          })}
        >
          <Group gap={0} justify="space-between">
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon size="1.1rem" />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
          </Group>
        </Link>
      ) : (
        <UnstyledButton
          onClick={() => {
            if (hasLinks) {
              setOpened((o) => !o);
              return;
            }
          }}
          className={cn("bg-green-50", {
            "bg-green-200": hasLinks && opened,
          })}
        >
          <Group gap={0} justify="space-between">
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon size="1.1rem" />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
            {hasLinks && <RiHome2Line size="1rem" stroke={1.5} />}
          </Group>
        </UnstyledButton>
      )}
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
