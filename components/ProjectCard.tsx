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
<div className='flex flex-col max-sm:items-center lg:flex-row gap-4 mt-4 mb-8 md:pl-6'>
<div className="relative card-styles opacity-90 transition ease-in-out delay-50 hover:translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl dark:hover:shadow-none duration-300 md:hover:animate-bmove" 
    style={{ 
      backgroundImage: `url(${bgImg})`,
      backgroundSize: '110%'
      }}>

      <div className="flex flex-col w-full h-full px-6 py-6 justify-around">
        <div>
          <p className="text-2xl text-center font-extrabold italic text-black/80"
          >
            {title}
          </p>
        </div>
          <div className="w-full h-full absolute bg-transparent rounded-3xl top-0 right-0 left-0">
        <a href={projectUrl} target='_blank' aria-label={`Open ${title} project page.`} className="w-[306px] h-full">
          <div className="h-full"></div>
        </a>
      </div>
      </div>    
    </div>
    <section className='flex flex-1 flex-col justify-between pt-2'>
    <p className=" font-normal text-black/60 text-base">{description}</p>

    <p className=" font-extralight text-black/40 text-sm ">{`Technologies used: ${tech}`}</p>
    <div className="z-10">
          {links.map(({ url, title, }: TProjectLink) => (
            <ButtonCards href={url} key={url} >
              {title}
            </ButtonCards> 
          ))}
        </div>

    </section>

</div>
   
  );
};
