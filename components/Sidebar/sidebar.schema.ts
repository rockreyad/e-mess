import React from "react";
import { z } from "zod";

const sidebarItemSchema = z.object({
  id: z.string().optional(),
  label: z.string(),
  path: z.string(),
  icon: z.any(),
  activeIcon: z.any(),
  isActive: z.boolean(),
  initiallyOpened: z.boolean().optional(),
  children: z
    .array(
      z.object({
        id: z.string().optional(),
        label: z.string(),
        path: z.string(),
        icon: z.string(),
        activeIcon: z.string(),
        isActive: z.boolean(),
      }),
    )
    .optional(),
});

const sidebarSchema = z.array(sidebarItemSchema);

export type SidebarItem = z.infer<typeof sidebarItemSchema>;
export type Sidebar = z.infer<typeof sidebarSchema>;
