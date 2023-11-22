import React, { FC, PropsWithChildren } from "react";
import { QueryProvider } from "./query-provider";
import { MantineProvider } from "./mantine-provider";

interface ProvidersProps extends PropsWithChildren {}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryProvider>
      <MantineProvider>{children}</MantineProvider>
    </QueryProvider>
  );
};
