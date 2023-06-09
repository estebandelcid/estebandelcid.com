import Link from "next/link";

export default function Button ({href, children }: {
    children: string
    href: string
}){
return (
<button className="w-auto h-fit min-h-[50px] flex items-center">
  <Link
    className="font-medium ml-9 text-[22px] text-[#E71B40]  hover:text-black dark:hover:text-white hover:underline decoration-[#E71B40] underline-offset-4"
    href={href}
  >
    {children}
  </Link>
</button>
)
}


