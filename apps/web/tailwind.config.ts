import { type Config } from "tailwindcss";
import baseConfig from "@repo/tailwind-config";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;
