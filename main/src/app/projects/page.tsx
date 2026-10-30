import { Container } from "@/components/container";
import { projects } from "@/config/projects";
import { createPageMetadata, pageTitle } from "@/lib/metadata";
import { ProjectsFilterView } from "./projects-filter-view";

export const metadata = createPageMetadata({
  title: pageTitle("Projects"),
  description: "AI systems, tools, and full-stack products built by Rutuj Dhawale.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="space-y-8 pb-16 pt-8">
      <Container>
        <p className="text-sm font-mono text-secondary">Showcase</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
        <p className="mt-2 text-secondary sm:text-base">
          AI systems, RAG pipelines, creative tools, and full-stack products. Search and filter by tags below.
        </p>
      </Container>
      <ProjectsFilterView initialProjects={projects} />
    </div>
  );
}
