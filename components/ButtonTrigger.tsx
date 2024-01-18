import Link from "next/link";

export default function ButtonTrigger({href, children }:{href: string; children:string}){
    return (
        <button className="w-auto h-fit flex items-center ">
            <Link
             className="font-normal text-black/60 text-xl hover:text-[#E71B40] underline-offset-4 translate ease-in-out hover:-translate-y-0.5 duration-300"
             href={href}
             target='_blank'
             >
            {children}
            </Link>
        </button>
    )
}