import Link from "next/link";

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
        <section className=" text-green-500 font-light">
          <p className=" mb-10 text-xl">{"<Link>"}</p>
          <Link
            className=" font-medium ml-9 text-[22px] text-[#E71B40]  hover:text-black dark:hover:text-white hover:underline decoration-[#E71B40] underline-offset-4"
            href={`/posts/aboutMe`}
          >
            More about me
          </Link>
          <br />
          <p className=" mt-10 text-xl">{"</Link>"}</p>
        </section>
      </section>
    );
}