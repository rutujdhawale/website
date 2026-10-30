import Image from "next/image";
import Link from "next/link";
import { GithubLogo, Globe } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { projects, type Project } from "@/config/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <LiquidGlassCard
      glowIntensity="sm"
      shadowIntensity="md"
      borderRadius="18px"
      blurIntensity="md"
      className="animate-in-up-on-view group flex min-w-0 flex-col"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div
        className={cn(
          "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-muted sm:aspect-[16/11]",
          !project.cover && ["bg-linear-to-br", project.gradient],
        )}
      >
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
            <span className="relative text-3xl font-bold tracking-tight text-foreground/20 sm:text-4xl">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 text-xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5">
            {project.website && (
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="rounded-md p-1 text-secondary transition-colors hover:text-foreground"
              >
                <Globe className="size-5" />
              </Link>
            )}
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="rounded-md p-1 text-secondary transition-colors hover:text-foreground"
            >
              <GithubLogo className="size-5" />
            </Link>
          </div>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary sm:text-base">
          {project.description}
        </p>

        <div className="mt-5 border-t border-dashed border-border/40 pt-3.5">
          <div className="flex min-w-0 flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/80 bg-background/60 px-2 py-0.5 font-mono text-[10px] font-medium text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </LiquidGlassCard>
  );
}

export function ProjectsGrid({
  items,
  limit,
  showHeading = true,
  showViewAll = false,
}: {
  items?: Project[];
  limit?: number;
  showHeading?: boolean;
  showViewAll?: boolean;
}) {
  const source = items ?? projects;
  const list = limit && !items ? source.filter((p) => p.featured) : source;
  const displayed = limit ? list.slice(0, limit) : list;

  return (
    <Container>
      {showHeading && (
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-secondary">Featured</p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
              Projects
            </h2>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {displayed.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {showViewAll && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="rounded-lg border border-border bg-card px-5 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
          >
            Show all projects
          </Link>
        </div>
      )}
    </Container>
  );
}
