import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, GithubLogo, Globe } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { projects } from "@/config/projects";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return createPageMetadata({
    title: pageTitle(project.title),
    description: project.description,
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
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const {
    title,
    tagline,
    overview,
    date,
    cover,
    tech,
    tags,
    features,
    href: repoHref,
    website: websiteHref,
  } = project;

  return (
    <div className="space-y-10 pb-16 pt-8">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>

        <p className="mt-5 font-mono text-xs text-muted-foreground">{date}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-base text-foreground/80 sm:text-lg">{tagline}</p>

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

        <div className="mt-10 space-y-10 border-t border-dashed border-border/50 pt-8">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Overview
            </h2>
            <p className="mt-3 text-base leading-relaxed text-secondary">
              {overview}
            </p>
          </div>

          {tech && tech.length > 0 && (
            <div>
              <h2 className="text-lg font-bold tracking-tight text-foreground">
                Technologies Used
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-card px-3 py-1 font-mono text-xs font-medium text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {features && features.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Key Highlights & Features
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.category}
                    className="rounded-xl border border-border bg-card/50 p-5 shadow-xs"
                  >
                    <h3 className="font-semibold text-foreground">{feature.category}</h3>
                    <ul className="mt-3 space-y-2">
                      {feature.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-secondary">
                          <CheckCircle className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
