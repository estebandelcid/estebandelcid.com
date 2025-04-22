import { ProjectCard } from "../components/ProjectCard";
import projects from "../lib/projects";

export default function ListOfCards() {
  return (
    // <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 2xl:gap-16">
    <div className="flex flex-col">
      <h2 className="text-xl font-bold text-black/80 pb-4">Projects</h2>
      <p className="text-base font-normal text-black/60 px-6 pb-4">
        I developed an e-commerce application as part of a React course, using
        modern technologies. Troubleshooting and improvements assigned through
        GitHub issues, ensuring that design and functionality are consistent
        across desktop and mobile devices. Optimization of images and design to
        enhance the visual experience, including components like the size guide.
      </p>
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
}
