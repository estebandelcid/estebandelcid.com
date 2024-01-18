
export default function HeaderSection(){
    return (
      <section className=" mx-8 w-auto h-auto flex-col justify-center font-sans font-semibold mb-40 ">
        <p className="text-center leading-tight text-2xl md:text-3xl lg:text-4xl lg:leading-tight">
          Hi, I'm  
          <span className="text-transparent bg-clip-text bg-text animate-b-text-move"> Esteban</span>
          <br />
          Front End Developer,
          <br />
          from México to the World
        </p>
      </section>
    );
}
