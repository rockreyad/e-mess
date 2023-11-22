import React, { FC } from "react";
import {
  MantineProvider as ThemeProvider,
  ColorSchemeScript,
  MantineProviderProps,
} from "@mantine/core";
import { theme } from "@/style/theme";

const MantineProvider: FC<MantineProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme} defaultColorScheme="dark">
      <ColorSchemeScript defaultColorScheme="dark" />
      {children}
    </ThemeProvider>
  );
};

export default MantineProvider;
