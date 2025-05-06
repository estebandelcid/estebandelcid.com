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
      <p className="text-lg font-semibold text-black/80">{company}</p>
      <p className="text-xs font-light text-black/40">{date}</p>
      </div>
     
      <div className="pl-4">
        {workUrl &&
          workUrl.map((work) => (
            <a
              key={work.title}
              href={work.url}
              target="_blank"
              aria-label={`Open ${company} project page.`}
              className="italic text-base underline underline-offset-2 text-black/40 decoration-black/20 hover:decoration-black/60 transition-all duration-300"
            >
              {work.title}
            </a>
          ))}
      </div>
      
      
      {/* <section className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">
        {video && (
          <video
            className="rounded-lg mx-auto"
            src={video}
            autoPlay
            loop
            muted
          ></video>
        )}
        <figure className="w-full flex flex-wrap gap-2">
          {imgs &&
            imgs.map((img) => (
              <img
                key={img.src}
                className="max-h-40 min-w-fit object-cover rounded-sm"
                src={img.src}
                alt={company}
              />
            ))}
        </figure>
      </section> */}
    </div>
  );
};
