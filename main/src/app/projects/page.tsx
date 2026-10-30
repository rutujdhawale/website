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
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
        <p className="mt-2 text-secondary sm:text-base">
          Selected work, collaborations, and personal projects.
        </p>
      </Container>
      <ProjectsFilterView initialProjects={projects} />
    </div>
  );
}
