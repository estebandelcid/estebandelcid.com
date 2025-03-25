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
      <p className="text-2xl font-semibold text-black/80">{company}</p>
      <p className="text-2xl font-semibold text-black/60">{role}</p>
      <p className="font-normal text-black/60 pb-4">{description}</p>
      <section className="max-w-full flex flex-col gap-2">
        {video && (
          <video
            className="rounded-sm mx-auto"
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
                className="max-h-60 min-w-fit object-cover rounded-sm"
                src={img.src}
                alt={company}
              />
            ))}
        </figure>
      </section>
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
      <p className="font-extralight text-black/40 text-sm">
        Technologies used: {tech}
      </p>
    </div>
  );
};
