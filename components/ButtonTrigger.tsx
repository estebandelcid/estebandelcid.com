import Link from "next/link";

export default function ButtonTrigger({href, children }:{href: string; children:string}){
    return (
        <button className="w-auto h-fit flex items-center ">
            <Link
             className="font-regular text-xl hover:text-[#E71B40] underline-offset-4 translate ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
             href={href}
             target='_blank'
             >
            {children}
            </Link>
        </button>
    )
}