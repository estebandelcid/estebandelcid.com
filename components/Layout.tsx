import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from './ThemeButton'
import React from "react";
import Button from "./Button";
import Footer from "./Footer";
import HeaderSection from "./HeaderSection";


const name = "Esteban Del Cid";
export const siteTitle = "Esteban Del Cid";

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className="font-sans min-h-[900px] flex flex-col justify-around py-10">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <title>{siteTitle}</title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content=" Hi, i´m Esteban, Front End Developer, from México to the World"
        />
        <link rel="canonical" href="https://estebandelcid.com" />

        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfkvjy6fs/image/upload/v1686734638/background-mini2_q5h6q0.jpg"
        />
        <meta name="og:type" content="website" />
        <meta name="og:site-name" content="Esteban Del Cid" />
        <meta name="url" content="https://estebandelcid.com" />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:description" content='Hi, i´m Esteban, Front End Developer, from México to the World' />
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
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
       <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
         <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
       <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <HeaderSection/>
          </>
        ) : (
          <>
            {/* <p className="text-4xl font-semibold pb-10">
                {name}
            </p>
            <div className="w-[167px] h-[167px]  lg:w-[306px] lg:h-[306px]">
                <Image
                  priority
                  src="/images/profile-pic.jpg"
                  className="h-[167px] w-[167px] lg:w-[306px] lg:h-[306px] rounded-[24px]"
                  height={167}
                  width={167}
                  alt="Profile-picture"
                  style={{ objectFit: "cover" }}
                />
            </div> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <Button href="/">{"Back to home"}</Button>}
      <Footer/>
    </div>
  );
}
