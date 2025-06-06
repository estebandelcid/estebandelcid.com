import ButtonCards from "./ButtonCards";
import ArrowUpRight from "./ui/ArrowUpRight";
export const ProjectCard = ({
  title,
  bgImg,
  projectUrl,
  description,
  tech,
  links,
}: TProject) => {
  return (
    <div className="flex flex-col max-sm:items-center lg:flex-row gap-4 mt-4 mb-8 pl-6">
      <div className="relative group card-styles transition ease-in-out delay-50 hover:scale-105 shadow-lg hover:shadow-xl dark:hover:shadow-none duration-300">
        <div
          className="absolute inset-0 bg-cover rounded-lg blur-[2px] contrast-75 pointer-events-none"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <div className="relative flex flex-col w-full h-full px-6 py-6 justify-around">
          <div className="flex flex-row justify-center items-center gap-2">
            <p
              className=" text-2xl text-center font-extrabold italic text-black/80"
              style={{ textShadow: "0 0 3px rgba(255, 255, 255, 0.5)" }}
            >
              {title}
            </p>
            <span className="transition-allduration-200 text-black/60 group-hover:text-black/80 group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform ease-in-out delay-50">
              <ArrowUpRight />
            </span>
          </div>
          <div className="w-full h-full absolute bg-transparent rounded-lg top-0 right-0 left-0">
            <a
              href={projectUrl}
              target="_blank"
              aria-label={`Open ${title} project page.`}
              className="w-full h-full"
            >
              <div className="h-full"></div>
            </a>
          </div>
        </div>
      </div>

      <section className="flex flex-1 flex-col justify-between pt-2">
        <p className=" font-extralight text-black/60 dark:text-white/60 text-base">
          {description}
        </p>

        <p className=" font-extralight text-black/40 dark:text-white/40 text-sm ">{`Technologies used: ${tech}`}</p>
        <div className="z-10 pt-2">
          {links.map(({ url, title }: TProjectLink) => (
            <ButtonCards href={url} key={url}>
              {title}
            </ButtonCards>
          ))}
        </div>
      </section>
    </div>
  );
};
