import { ProjectCard } from "../components/ProjectCard";
import projects from "../lib/projects";

export default function ListOfCards() {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold text-black/80 pb-4">Projects</h2>
      <div className="text-base font-normal text-black/60 px-6 pb-4 space-y-2">
        <p>
          These are some of the projects I built while learning web development.
          Most of them focus on using and understanding React—things like
          classic hooks such as useState and useEffect, fetching APIs, styling
          components, and making sure everything is responsive, accessible, and
          written with good HTML semantics.
        </p>
        <p>I still keep and maintain them because they mean a lot to me.</p>
        <p>
          They remind me where my passion for web development really started.
          They keep me motivated to keep learning and improving every day.
        </p>
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
}
