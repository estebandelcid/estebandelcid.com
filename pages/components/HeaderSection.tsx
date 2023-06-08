import Button from "./BackButton";

export default function HeaderSection(){
    return (
      <section className=" mx-8 text-black-900 w-auto h-auto flex-col justify-center font-sans font-semibold">
        <p className="text-center text-3xl">
          Hi, i´m Esteban,
          <br />
          Front End Developer,
          <br />
          from México to the
          <br />
          World
        </p>
        <section className=" text-green-500 font-light m-8">
          <p className="text-xl">{"<Link>"}</p>
          <Button href={`/posts/aboutMe`}>{"More about me"}</Button>
          <p className="text-xl">{"</Link>"}</p>
        </section>
      </section>
    );
}