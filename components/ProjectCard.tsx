import Button from "./Button";
import Image from "next/image";
import ButtonCards from './ButtonCards';
import Github from "./icons/GitHub";

export const ProjectCard = ({
  title,
  bgImg,
  projectUrl,
  description,
  tech,
  links,
}: TProject) => {
  return (
    <div className="card-styles opacity-90 transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 hover:opacity-100 hover:shadow-neutral-500/40 hover:shadow-[0px_0px_90px_1px] duration-300" style={{ backgroundImage: `url(${bgImg})`}}>
      <div className="flex flex-col  w-[306] h-full  px-6 py-6 justify-around">
        <div>
          <a
            href={projectUrl}
            target='_blank'
            className="no-underline hover:text-white hover:underline text-[26px] font-medium "
          >
            {title}
          </a>
          <p className=" font-normal text-[#3F3F3F]">{description}</p>
        </div>
        <p className=" font-extralight text-[#3F3F3F] text-base ">{tech}</p>
        <div>
          {links.map(({ url, title, }: TProjectLink) => (
            <ButtonCards href={url} key={url} icon={Github}>
              {title}
            </ButtonCards>
          ))}
        </div>
      </div>
    </div>
  );
};

// const style: {} = {
//   background-image: 'https://i.etsystatic.com/27043408/r/il/ed7ac3/3538052412/il_fullxfull.3538052412_59ge.jpg'
// }


// https://i.etsystatic.com/27043408/r/il/ed7ac3/3538052412/il_fullxfull.3538052412_59ge.jpg