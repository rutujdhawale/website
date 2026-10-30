import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, GithubLogo, Globe } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { projects } from "@/config/projects";
import { getProjectPost, getProjectPosts } from "@/lib/mdx";
import { MdxContent } from "@/components/mdx-content";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export async function generateStaticParams() {
  const posts = await getProjectPosts();
  const slugs = new Set([...projects.map((project) => project.slug), ...posts.map((post) => post.slug)]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getProjectPost(slug);
  const project = projects.find((item) => item.slug === slug);
  if (!post && !project) return {};

  const title = post?.title || project?.title || "Project";
  const description = post?.description || project?.description || "";

  return createPageMetadata({
    title: pageTitle(title),
    description,
    path: `/projects/${slug}`,
    type: "article",
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getProjectPost(slug);
  const project = projects.find((item) => item.slug === slug);
  if (!post && !project) notFound();

  const title = post?.title || project?.title || "";
  const description = post?.description || project?.description || "";
  const date = post?.date || project?.date || "";
  const cover = post?.cover || project?.cover;
  const tech = post?.tech || project?.tech || [];
  const tags = post?.tags || project?.tags || [];
  const repoHref = project?.href;
  const websiteHref = project?.website;

  return (
    <div className="space-y-8 pb-16 pt-8">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>

        <p className="mt-4 font-mono text-xs text-muted-foreground">{date}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {websiteHref && (
            <Link
              href={websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Globe className="size-4" />
              Live Demo
            </Link>
          )}
          {repoHref && (
            <Link
              href={repoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <GithubLogo className="size-4" />
              GitHub Repository
            </Link>
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/70 bg-muted/50 px-2.5 py-0.5 font-mono text-xs text-secondary"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {cover && (
          <LiquidGlassCard
            glowIntensity="sm"
            shadowIntensity="md"
            borderRadius="18px"
            blurIntensity="md"
            className="relative mt-8 aspect-[16/9] overflow-hidden"
          >
            <Image
              src={cover}
              alt={`${title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover object-top"
              priority
            />
          </LiquidGlassCard>
        )}

        <article className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
          {post?.content ? (
            <MdxContent source={post.content} />
          ) : (
            <>
              <h2>Overview</h2>
              <p>{description}</p>
              {tech.length > 0 && (
                <>
                  <h2>Technologies</h2>
                  <ul>
                    {tech.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </article>
      </Container>
    </div>
  );
}
