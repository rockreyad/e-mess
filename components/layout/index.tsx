"use client";
import React, { createContext } from "react";
// import Navbar from "./navbar";
import Page from "./page";
import Sidebar from "./sidebar";
import MobileSidebar from "./sidebar/mobile";
import {
  UseDisclosureReturn,
  useDisclosure,
  useMediaQuery,
  Stack,
  Box,
} from "@chakra-ui/react";
import Navbar from "../navbar";

export const NavContext = createContext<UseDisclosureReturn | null>(null);

const SiteLayout = ({ children }: any) => {
  const sidebarState = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <NavContext.Provider value={sidebarState}>
      <Box textStyle="light">
        <Navbar />
        <Box pos="relative" h="max-content" m={{ base: 2, md: 5 }}>
          <Stack direction="row" spacing={{ md: 5 }}>
            <Sidebar />
            {isSmallScreen && <MobileSidebar />}
            <Page>{children}</Page>
          </Stack>
        </Box>
      </Box>
    </NavContext.Provider>
  );
};

export default SiteLayout;
