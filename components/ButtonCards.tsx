import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function ButtonCards({
  href,
  children,
  icon
}: {
  children: string;
  href: string;
  icon: any
}) {
  return (
    <button className="w-auto h-fit flex items-center  ">
      <Link
        className="font-extralight text-base  text-black/60 flex items-center hover:text-[#fff] transition duration-300 "
        href={href}
        target='_blank'
      >
        <span className="relative mr-2 ">
          <AiFillGithub />
        </span>
        {children}
      </Link>
    </button>
  );
}
