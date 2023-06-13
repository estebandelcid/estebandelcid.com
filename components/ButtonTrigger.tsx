import Link from "next/link";

export default function ButtonTrigger({href, children }:{href: string; children:string}){
    return (
        <button className="w-auto h-fit flex items-center ">
            <Link
             className="font-regular text-[18px]  hover:text-[#E71B40]  hover:underline decoration-[#E71B40] underline-offset-4"
             href={href}>
            {children}
            </Link>
        </button>
    )
}