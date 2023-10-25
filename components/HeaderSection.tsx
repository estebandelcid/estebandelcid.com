import Button from "./Button";

export default function HeaderSection(){
    return (
      <section className=" mx-8 w-auto h-auto flex-col justify-center font-sans font-semibold mb-40">
        <p className="text-center text-3xl md:text-5xl lg:text-6xl leading-none">
          Hi, I´m Esteban,
          <br />
          <span className="text-transparent bg-clip-text bg-text animate-b-text-move">
          Front End 
          </span>
          <span className="text-transparent"> </span>
          Developer,
          <br />
          from México to the
          <br />
          World
        </p>
        {/* <section className=" text-green-500 text-xl md:text-3xl font-light m-8 md:mx-8 md:mb-16 lg:mb-28 lg:text-[34.6px] space-y-4 lg:space-y-8">
          <p>{"<Link>"}</p>
          <Button href={`/posts/aboutMe`}>{"More about me"}</Button>
          <p>{"</Link>"}</p>
        </section> */}
      </section>
    );
}

// f74768