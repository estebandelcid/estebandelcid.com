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
  imgs
}: TWorks) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full h-full px-6 py-8 justify-around">
        <div className="pb-4">
          <p className="text-2xl font-semibold   text-black/80">{company}</p>
          <p className="text-2xl font-semibold   text-black/60">{role}</p>
        </div>
        <p className="font-normal text-black/60 pb-4">{description}</p>
        <section className="flex flex-col gap-4">
          {video && (
            <video
              className="rounded-sm max-w-full mx-auto"
              src={video}
              autoPlay
              loop
              muted
            ></video>
          )}

          <figure className="w-full flex flex-wrap gap-4">
            {imgs &&
              imgs.map((img) => (
                <img
                  key={img.src}
                  className="max-h-60 pb-4 min-w-fit object-cover rounded-sm"
                  src={img.src}
                  alt={company}
                />
              ))}
          </figure>
        </section>

        <p className="font-extralight text-black/40 text-sm pb-4">
          Technologies used: {tech}
        </p>
        <div className="w-full h-full absolute bg-transparent rounded-3xl top-0 right-0 left-0">
          <a
            href={workUrl}
            target="_blank"
            aria-label={`Open ${company} project page.`}
            className="w-[306px] h-full"
          >
            <div className="h-full"></div>
          </a>
        </div>
      </div>
    </div>
  );
};
