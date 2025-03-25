import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import HeaderSection from "./HeaderSection";
import { AnimatedDivider } from "./AnimatedDivider";


const name = "Esteban Del Cid";
export const siteTitle = "Esteban Del Cid";

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="font-mono min-h-[900px] container mx-auto flex flex-col pb-10 pt-40">
      <div className="mx-auto md:mx-28">
      <Head>
        <title>{siteTitle}</title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content=" Hi, I´m Esteban, Front End Developer, from México to the World"
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
        <meta name="og:description" content='Hi, I´m Esteban, Front End Developer, from México to the World' />
        <meta property="og:url" content="https://estebandelcid.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:title" content="Esteban Del Cid" />
        <meta
          name="twitter:description"
          content="Hi, I´m Esteban, Front End Developer, from México to the World"
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
      <header className="flex flex-col">
       <HeaderSection/>
       <AnimatedDivider className="w-full" />
      </header>
      <main>{children}</main>
      <AnimatedDivider className="w-full" />
      <Footer/>

      </div>
      
    </div>
  );
}
