import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { colors } from "./styles";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
  cssVarPrefix: "ck",
};

export const theme = extendTheme({
  config,
  colors,
});
