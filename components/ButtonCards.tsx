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
    <button className="w-auto h-fit flex items-center">
      <Link
        className="flex items-center font-extralight text-sm  text-black/40 dark:text-white/40 hover:text-[#fff] dark:hover:text-[#fff] transition duration-300"
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
