import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function ButtonCards({
  href,
  children,
}: {
  children: string;
  href: string;
}) {
  return (
    <button className="w-auto h-fit flex items-center  ">
      <Link
        className="font-extralight text-base  text-black/60 flex items-center hover:text-[#fff] transition duration-300 "
        href={href}
        target='_blank'
        aria-label={`Open the project repository on GitHub ${href}`}
      >
        <span className="relative mr-2 ">
          <AiFillGithub />
        </span>
        {children}
      </Link>
    </button>
  );
}
