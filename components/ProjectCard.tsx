import ButtonCards from './ButtonCards';
import Image from 'next/image';
export const ProjectCard = ({
  title,
  bgImg,
  projectUrl,
  description,
  tech,
  links,
}: TProject) => {
  return (

    <div className="relative card-styles opacity-90 transition ease-in-out delay-50 hover:translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl dark:hover:shadow-none duration-300 md:hover:animate-bmove" 
    style={{ 
      backgroundImage: `url(${bgImg})`,
      backgroundSize: '110%'
      }}>

      <div className="flex flex-col w-full h-full px-6 py-6 justify-around">
        <div>
          <p className="text-2xl font-medium text-black/80"
          >
            {title}
          </p>
          <p className=" font-normal text-black/60 text-lg">{description}</p>
        </div>
        <p className=" font-extralight text-black/60 text-base ">{tech}</p>

        
          <div className="w-full h-full absolute bg-transparent rounded-3xl top-0 right-0 left-0">
        <a href={projectUrl} target='_blank' aria-label={`Open ${title} project page.`} className="w-[306px] h-full">
          <div className="h-full"></div>
        </a>
      </div>

      <div className="z-10">
          {links.map(({ url, title, }: TProjectLink) => (
            <ButtonCards href={url} key={url} >
              {title}
            </ButtonCards> 
          ))}
        </div>

      </div>
      
    </div>
  );
};
