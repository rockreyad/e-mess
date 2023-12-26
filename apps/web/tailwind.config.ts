import type { Config } from "tailwindcss";

import baseConfig from "@repo/tailwind-config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [baseConfig],
} satisfies Config;
