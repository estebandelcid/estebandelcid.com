import { ProjectCard } from "../components/ProjectCard";
import projects from "../lib/projects";

export default function ListOfCards(){
    return (
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-16">
        {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    );
}

    