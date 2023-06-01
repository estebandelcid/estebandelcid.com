export default function Card({ imageUrl, imageAlt, href, title, description, tecnologies, className }) {
    return (
      <div className={className}>
        <div className="flex flex-col  w-[306] h-full  px-6 py-6 justify-around">
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
            {tecnologies}
          </p>
        </div>
      </div>
    );
}

