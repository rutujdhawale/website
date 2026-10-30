"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/projects-grid";
import { type Project } from "@/config/projects";
import { MagnifyingGlass, Tag } from "@phosphor-icons/react/dist/ssr";

export function ProjectsFilterView({ initialProjects }: { initialProjects: Project[] }) {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    initialProjects.forEach((p) => {
      p.tags?.forEach((t) => tagSet.add(t));
    });
    return ["All", ...Array.from(tagSet)];
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesTag =
        selectedTag === "All" || (project.tags && project.tags.includes(selectedTag));

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesTag;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        (project.tags && project.tags.some((t) => t.toLowerCase().includes(query))) ||
        (project.tech && project.tech.some((t) => t.toLowerCase().includes(query)));

      return matchesTag && matchesSearch;
    });
  }, [initialProjects, selectedTag, searchQuery]);

  return (
    <div className="space-y-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlass className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-secondary" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords, tech, or tags..."
              className="w-full rounded-xl border border-border bg-card/60 py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-secondary focus:border-foreground/40 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs sm:pb-0">
            <Tag className="size-3.5 text-secondary shrink-0" />
            <span className="text-secondary mr-1 hidden sm:inline">Tags:</span>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`shrink-0 rounded-lg px-2.5 py-1 font-mono transition-colors ${
                  selectedTag === tag
                    ? "bg-foreground text-background font-semibold"
                    : "border border-border bg-card/60 text-secondary hover:text-foreground hover:bg-muted"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
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
            <p className="text-secondary">No projects found matching your keyword or tag filter.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedTag("All");
                setSearchQuery("");
              }}
              className="mt-3 text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-80"
            >
              Reset filters
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}
