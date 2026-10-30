import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/meta";
import { getProjectPosts } from "@/lib/mdx";
import { projects } from "@/config/projects";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
  { url: `${siteConfig.url}/projects`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${siteConfig.url}/resume`, changeFrequency: "monthly", priority: 0.8 },
];

function parseDate(value: string | undefined): Date | undefined {
  if (!value) return undefined;
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? undefined : new Date(parsed);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getProjectPosts();
  const allSlugs = new Set([...projects.map((p) => p.slug), ...posts.map((p) => p.slug)]);

  const projectRoutes: MetadataRoute.Sitemap = Array.from(allSlugs).map((slug) => {
    const post = posts.find((p) => p.slug === slug);
    return {
      url: `${siteConfig.url}/projects/${slug}`,
      lastModified: parseDate(post?.date),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...projectRoutes];
}
