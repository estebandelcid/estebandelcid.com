import { ProjectCard } from "../components/ProjectCard";
import works from "../lib/works";
import { WorkSection } from "./WorkSection";

export default function ListOfWorks() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-black/80 dark:text-white/80">Work</h2>
        {works.map((work) => (
          <WorkSection key={work.company} {...work} />
        ))}
      </div>
    </>
  );
}   
