import ButtonCards from "./ButtonCards";
import Image from "next/image";
export const WorkSection = ({
  company,
  role,
  img,
  workUrl,
  description,
  tech,
  video,
  imgs,
}: TWorks) => {
  return (
    <div className="flex flex-col px-6 py-4">
      <p className="text-xl font-semibold text-black/80">{company}</p>
      <section className="pb-2">
        {workUrl &&
          workUrl.map((work) => (
            <a
              key={work.title}
              href={work.url}
              target="_blank"
              aria-label={`Open ${company} project page.`}
              className="italic text-base underline underline-offset-2 text-black/60 decoration-black/20 hover:decoration-black/60 transition-all duration-300"
            >
              {work.title}
            </a>
          ))}
      </section>
      <p className="text-lg font-semibold text-black/60">{role}</p>
      <p className="font-normal text-black/60 pb-4">{description}</p>
      
      <section className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">
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
      </section>
     
      <p className="font-extralight text-black/40 text-sm pt-2">
        Technologies used: {tech}
      </p>
    </div>
  );
};
