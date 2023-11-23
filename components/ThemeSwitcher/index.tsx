import { cn } from "@/lib/utils";
import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import classes from "./theme-switcher.module.css";

export const ThemeSwitcher = () => {
  // -> colorScheme is 'auto' | 'light' | 'dark'
  const { setColorScheme } = useMantineColorScheme();

  // -> computedColorScheme is 'light' | 'dark', argument is the default value
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <ActionIcon
      onClick={toggleColorScheme}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <RiSunLine
        className={cn(classes.icon, classes.light, "text-yellow-400")}
        stroke={1.5}
      />
      <RiMoonLine
        className={cn(classes.icon, classes.dark, "text-gray-400")}
        stroke={1.5}
      />
    </ActionIcon>
  );
};
