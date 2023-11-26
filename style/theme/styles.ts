import { StyleFunctionProps } from "@chakra-ui/react";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: "body",
      bg: props.colorMode === "dark" ? "bg.900" : "gray.50",
      minH: "100%",
    },
    html: {
      minH: "100%",
    },
  }),
};
