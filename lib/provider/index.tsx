import React, { FC, PropsWithChildren } from "react";
import { QueryProvider } from "./query-provider";

interface ProvidersProps extends PropsWithChildren {}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <QueryProvider>{children}</QueryProvider>;
};
