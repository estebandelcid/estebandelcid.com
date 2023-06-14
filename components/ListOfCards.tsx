import Card from "./Card";
import { ProjectCard } from "../components/ProjectCard";
import projects from "../lib/projects";

export default function ListOfCards(){
    return (
      <div className="w-auto grid grid-rows-3 grid-flow-col gap-8 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-1 lg:gap-8 lg:scale-95 justify-center xl:gap-16 xl:scale-100">
        {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    );
}

    