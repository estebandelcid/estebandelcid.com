import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from './ThemeButton'
import headerSection from "./headerSection";

const name = "Esteban Del Cid";
export const siteTitle = "Esteban Del Cid";

export default function Layout({ children, home }) {
  return (
    <div className="font-sans min-h-[900px] flex flex-col justify-around py-10">
      <Head>
        <link rel="icon" href="/edc.ico" />
        <meta name="description" content="My profile" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <h1 className="text-4xl font-extrabold my-px mx-0">{}</h1>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bol pb-10">
              <Link href="/" className="text-inherit">
                {name}
              </Link>
            </h2>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-[24px]  w-[167px] h-[167px]"
                height={167}
                width={167}
                alt="Profile-picture"
              />
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="w-auto h-fit">
          <Link
            className="font-medium ml-9 text-[22px] text-[#E71B40]  hover:text-black dark:hover:text-white hover:underline decoration-[#E71B40] underline-offset-4"
            href="/"
          >
            ← Back to home
          </Link>
        </div>
      )}
      <footer className="flex flex-col items-center space-y-[20px]">
        <ThemeButton />
        <section>
          <ul className=" space-x-12">
            <a
              href="https://www.linkedin.com/in/estebandelcid/"
              className=" hover:text-[#E71B40] hover:underline decoration-[#E71B40] underline-offset-4 text-[18px]"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/estebandelcid"
              className=" hover:text-[#E71B40] hover:underline decoration-[#E71B40] underline-offset-4 text-[18px]"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/estebandelcid"
              className=" hover:text-[#E71B40] hover:underline decoration-[#E71B40] underline-offset-4 text-[18px]"
            >
              Twitter
            </a>
          </ul>
        </section>
      </footer>
    </div>
  );
}
