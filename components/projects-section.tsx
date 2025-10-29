import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Projects</h2>
        <p className="text-muted-foreground">
          A selection of my recent work and side projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

