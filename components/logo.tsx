import { cn } from "@/lib/utils";
import { app } from "@/lib/utils/constant";
import Image from "next/image";
import React, { FC } from "react";

interface LogoProps {
  name?: string;
  className?: string;
}
export const Logo: FC<LogoProps> = ({ name, className }) => {
  if (name) {
    return <h1 className={cn(className)}>{name ?? app.name}</h1>;
  }
  return (
    <Image
      src={"/images/logo-white.png"}
      alt={"logo"}
      width={200}
      height={50}
      className={cn(className)}
    />
  );
};
