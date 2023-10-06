import { Outlet } from "@remix-run/react";

import { model } from "~/models";
import { formatDateLastMod } from "~/utils";

import type { SEOHandle } from "~/utils";

export const handle: SEOHandle = {
  getSitemapEntries: async () => {
    const notes = await model.note.query.getAll();
    return notes.map((note) => {
      return {
        route: `/${note.user.username}/${note.slug}`,
        priority: 0.7,
        lastmod: formatDateLastMod(note.updatedAt),
      };
    });
  },
};

export default function Route() {
  return <Outlet />;
}
