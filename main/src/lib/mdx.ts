import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type ProjectPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover?: string;
  tags?: string[];
  tech?: string[];
  content: string;
};

const contentDir = path.join(process.cwd(), "content", "projects");

export async function getProjectPosts(): Promise<ProjectPost[]> {
  try {
    const files = await fs.readdir(contentDir);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const filePath = path.join(contentDir, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(source);

        return {
          slug: file.replace(/\.mdx$/, ""),
          title: (data.title as string) || "",
          description: (data.description as string) || "",
          date: (data.date as string) || "",
          cover: data.cover as string | undefined,
          tags: (data.tags as string[]) || [],
          tech: (data.tech as string[]) || [],
          content,
        };
      })
    );

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return [];
  }
}

export async function getProjectPost(slug: string): Promise<ProjectPost | null> {
  try {
    const filePath = path.join(contentDir, `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(source);

    return {
      slug,
      title: (data.title as string) || "",
      description: (data.description as string) || "",
      date: (data.date as string) || "",
      cover: data.cover as string | undefined,
      tags: (data.tags as string[]) || [],
      tech: (data.tech as string[]) || [],
      content,
    };
  } catch {
    return null;
  }
}

