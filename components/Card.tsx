import { link } from "fs";

export default function Card({
  href,
  title,
  description,
  technologies,
  className,
}: {
  href: string;
  title: string;
  description: string;
  technologies: string;
  className: string;
}) {
  return (
    <div className={className}>
      <div className="flex flex-col  w-[306px] h-full  px-6 py-6 justify-around">
        <div>
          <a
            href={href}
            className="no-underline hover:text-white hover:underline text-[22px] font-medium "
          >
            {title}
          </a>
          <p className=" font-normal text-[#3F3F3F]">{description}</p>
        </div>
        <p className=" font-extralight text-[#3F3F3F] text-base ">
          {technologies}
        </p>
      </div>
    </div>
  );
}
