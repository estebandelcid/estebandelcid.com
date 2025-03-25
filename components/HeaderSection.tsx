
export default function HeaderSection(){
    return (
      <section className="w-auto h-auto flex-col justify-center font-bold">
        <p className="font-mono text-black/80 leading-tight text-2xl md:text-4xl lg:text-6xl lg:leading-tight">
          Hi, I'm  
          <span className="text-transparent bg-clip-text bg-text animate-b-text-move"> Esteban</span>
          <br />
          Front End Developer,
          <br />
          from México to the World.
        </p>
      </section>
    );
}
