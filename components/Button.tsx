import Link from "next/link";

export default function Button ({href, children }: {
    children: string
    href: string
}){
return (
<button className="w-auto h-fit min-h-[50px] flex items-center ml-8 min-[1445px]:mt-6 ">
  <Link
    className="font-medium p-4 rounded-[50px] text-xl md:text-3xl max-[920px]:shadow-[0px_0px_10px_0.01px] max-[920px]:shadow-red-500/20 lg:text-[39px] text-[#E71B40]  hover:text-black dark:hover:text-white  hover:shadow-neutral-500/20 hover:shadow-[0px_0px_10px_1px] dark:hover:shadow-stone-500/20 dark:hover:shadow-[0px_0px_10px_1px] transition duration-300"
    href={href}
  >
    {children}
  </Link>
</button>
)
}


