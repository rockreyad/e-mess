"use client";
import React from "react";
import {
  VStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme-switcher"
      variant="outline"
      colorScheme="black"
      size="lg"
      icon={useColorModeValue(<BsMoon />, <BsSun />)}
      onClick={toggleColorMode}
    />
  );
};
