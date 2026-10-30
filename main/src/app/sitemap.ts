import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/meta";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/resume`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
