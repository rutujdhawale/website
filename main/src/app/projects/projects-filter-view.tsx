"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/projects-grid";
import { type Project } from "@/config/projects";

export function ProjectsFilterView({ initialProjects }: { initialProjects: Project[] }) {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    initialProjects.forEach((p) => {
      p.tags?.forEach((t) => tagSet.add(t));
    });
    // Keep at most 9 distinct tags + "All" (total 10 items max)
    const unique = Array.from(tagSet).slice(0, 9);
    return ["All", ...unique];
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    if (selectedTag === "All") return initialProjects;
    return initialProjects.filter(
      (project) => project.tags && project.tags.includes(selectedTag),
    );
  }, [initialProjects, selectedTag]);

  return (
    <div className="space-y-8">
      <Container>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar sm:pb-0">
          {allTags.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`shrink-0 rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
                  isActive
                    ? "bg-foreground font-semibold text-background shadow-xs"
                    : "border border-border/80 bg-card/60 text-secondary hover:border-foreground/30 hover:bg-muted hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </Container>

      <Container>
        {filteredProjects.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-card/30 p-12 text-center">
            <p className="text-secondary">No projects found matching this filter.</p>
            <button
              type="button"
              onClick={() => setSelectedTag("All")}
              className="mt-3 text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-80"
            >
              Show all
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}
