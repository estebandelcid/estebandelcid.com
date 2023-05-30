import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Esteban Del Cid";
export const siteTitle = "Esteban Del Cid";

export default function Layout({ children, home }) {
  return (
    <div className="mt-8">
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
            {/* <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full w-36 h-36"
              width={144}
              height={144}
              alt=""
            /> */}
            <h1 className="text-4xl font-extrabold my-px mx-0">{}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full  w-[108px] h-[108px]"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className="text-2xl font-bol">
              <Link href="/" className="text-inherit">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="my-16 mx-4 mb-0 ">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
