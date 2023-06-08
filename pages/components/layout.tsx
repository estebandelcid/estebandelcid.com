import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from './ThemeButton'
import React from "react";
import Button from "./Button";


const name = "Esteban Del Cid";
export const siteTitle = "Esteban Del Cid";

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className="font-sans min-h-[900px] flex flex-col justify-around py-10">
      <Head>
        <link rel="icon" href="/edc.ico" />
        <title>{siteTitle}</title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content=" Hi, i´m Esteban, Front End Developer, from México to the World"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfkvjy6fs/image/upload/v1686094239/Background/background-mini_hjd00p.jpg"
        />
        <link rel="canonical" href="https://estebandelcid.com" />
        <meta name="og:type" content="website" />
        <meta name="og:site-name" content="Esteban Del Cid" />
        <meta name="url" content="https://estebandelcid.com" />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:url" content="https://estebandelcid.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="twitter:title" content="Esteban Del Cid" />
        <meta
          name="twitter:description"
          content="Hi, i´m Esteban, Front End Developer, from México to the World"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dfkvjy6fs/image/upload/v1686094239/Background/background-mini_hjd00p.jpg"
        />
        <meta name="twitter:site" content="@estebandelcid" />
        <meta name="twitter:author" content="Esteban Del Cid" />
        <meta
          property="article:author"
          content="https://twitter.com/estebandelcid"
        />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <h1 className="text-4xl font-extrabold my-px mx-0">{}</h1>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bol pb-10">
              <Link
                href="/"
                className="text-3xl text-black-900 font-sans font-semibold"
              >
                {name}
              </Link>
            </h2>
            <div className="w-[167px] h-[167px]  ">
              <Link href="/">
                <Image
                  priority
                  src="/images/profile-pic.jpg"
                  className="h-[167px] w-[167px] rounded-[24px]"
                  height={167}
                  width={167}
                  alt="Profile-picture"
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <Button href="/">{"Back to home"}</Button>}
      <footer className="flex flex-col items-center space-y-[20px] mt-8">
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
