import type { MetadataRoute } from "next";
import { SITE_URL, ROUTES } from "@/lib/event";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-23");
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}${ROUTES.leaders}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}${ROUTES.professionals}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
