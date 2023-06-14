import Link from "next/link";

export default function Button ({href, children }: {
    children: string
    href: string
}){
return (
<button className="w-auto h-fit min-h-[50px] flex items-center ml-8 ">
  <Link
    className="font-medium p-3 rounded-[50px] text-xl md:text-3xl max-[920px]:shadow-[0px_0px_10px_1px] lg:text-[39px] text-[#E71B40]  hover:text-black dark:hover:text-white  hover:shadow-neutral-500/90 hover:shadow-[0px_0px_100px_10px] dark:hover:shadow-stone-500/90 dark:hover:shadow-[0px_0px_100px_1px] transition duration-300"
    href={href}
  >
    {children}
  </Link>
</button>
)
}


