import ButtonCards from "./ButtonCards";
import Image from "next/image";
export const WorkSection = ({
  company,
  workUrl,
  date
}: TWorks) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:gap-2 px-6 py-4">
      <div>
      <p className="text-lg font-semibold text-black/80 dark:text-white/80">{company}</p>
      <p className="text-xs font-light text-black/40 dark:text-white/40">{date}</p>
      </div>
     
      <div className="pl-4">
        {workUrl &&
          workUrl.map((work) => (
            <a
              key={work.title}
              href={work.url}
              target="_blank"
              aria-label={`Open ${company} project page.`}
              className="italic text-base underline underline-offset-2 text-black/40 dark:text-white/40 decoration-black/20 dark:hover:decoration-white/60 hover:decoration-black/60 dark:decoration-white/20 transition-all duration-300"
            >
              {work.title}
            </a>
          ))}
      </div>
    </div>
  );
};
