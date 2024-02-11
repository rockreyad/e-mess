import type { Config } from "tailwindcss";
import sharedConfig from "@turbocharger/tailwind-config/tailwind.config.ts";

const config: Pick<Config, "presets" | "content"> = {
  presets: [
    {
      ...sharedConfig,
    },
  ],
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
};
export default config;
