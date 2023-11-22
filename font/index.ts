import localFont from "next/font/local";

export const gt_alsheim_pro = localFont({
  src: [
    {
      path: "../font/gt-walsheim-pro/GTWalsheimPro-Thin.woff2",
      weight: "100",
    },
    {
      path: "../font/gt-walsheim-pro/GTWalsheimPro-UltraLight.woff2",
      weight: "200",
    },
    {
      path: "../font/gt-walsheim-pro/GTWalsheimPro-Light.woff2",
      weight: "300",
    },
    {
      path: "../font/gt-walsheim-pro/GTWalsheimPro-Regular.woff2",
      weight: "400",
    },
    {
      path: "../font/gt-walsheim-pro/GTWalsheimPro-Medium.woff2",
      weight: "500",
    },
    {
      path: "../font/gt-walsheim-pro/GTWalsheimPro-Bold.woff2",
      weight: "700",
    },
    {
      path: "../font/gt-walsheim-pro/GTWalsheimPro-UltraBold.woff2",
      weight: "800",
    },
    {
      path: "../font/gt-walsheim-pro/GTWalsheimPro-Black.woff2",
      weight: "900",
    },
  ],
  display: "swap",
  variable: "--font-gt-alsheim-pro",
});

export const fontMapper = {
  "font-gt-alsheim-pro": gt_alsheim_pro.variable,
} as Record<string, string>;
