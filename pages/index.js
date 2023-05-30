import Head from "next/head";
import Layout, { siteTitle } from "./components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "./components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home className="text-sans">
      {/* <> */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className=" mx-8 text-black-900 w-auto h-auto flex-col justify-center font-sans font-semibold">
        <p className="text-center text-3xl">
          Hi, i´m Esteban,
          <br />
          Front End Developer,
          <br />
          from México to the
          <br />
          World
        </p>
        <section className=" text-green-500 font-light">
          <p className=" mb-10 text-base">{"<Link>"}</p>
          <a
            className=" font-medium ml-9"
            href="https://www.linkedin.com/in/estebandelcid/"
          >
            {" "}
            More about me
          </a>
          <br />
          <p className=" mt-10">{"</Link>"}</p>
        </section>
      </section>

      <section className="text-xl leading-5 pt-px">
        <h2 className="text-xl leading-[1.4px] my-6 mx-0">Blog</h2>
        <ul className=" list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mt-0 mx-0 mb-5">
              <Link href={`/posts/${id}`} key={id}>
                {title}
              </Link>
              <br />
              <small className=" text-[#666]">
                <Date dateString={date} />
              </small>
              <br />
            </li>
          ))}
        </ul>
      </section>
      {/* </> */}
    </Layout>
  );
}

// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Esteban Del Cid</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className={styles.title}>
//           Read <Link href="/posts/first-post">This page!</Link>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing <code>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
//         </a>
//       </footer>

//       <style jsx>{`
//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }
//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         footer img {
//           margin-left: 0.5rem;
//         }
//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           text-decoration: none;
//           color: inherit;
//         }
//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }
//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
//   )
// }

