import { ProjectCard } from "../components/ProjectCard";
import projects from "../lib/projects";

export default function ListOfCards(){
    return (
      // <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 2xl:gap-16">
      <div className="flex flex-col">
        <h2 className="text-5xl font-bold text-black/80">Projects</h2>
        {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    );
}

    