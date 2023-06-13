import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import DateFormat from "../lib/date";
import HeaderSection from "../components/HeaderSection";
import ListOfCards from "../components/ListOfCards";
import { GetStaticProps } from "next";
import { ProjectCard } from "../components/ProjectCard";
import projects from "../lib/projects";
import Link from "next/link";


// export const getStaticProps: GetStaticProps = async() => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }


export default function Home({ allPostsData }: {allPostsData:{
  date: string 
  title: string 
  id: string}[]
}) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className=" h-auto w-screen ">
        <section className=" w-full h-full grid grid-cols-1 gap-8 mb-8 items-center place-items-center text-[22px] ">
          <ListOfCards />
          
           {/* Blog seccion  */}
      {/* <section className="text-xl leading-5 pt-px">
        <h2 className="text-xl leading-[1.4px] my-6 mx-0">Blog</h2>
        <ul className=" list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mt-0 mx-0 mb-5" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className=" text-[#666]">
                <p>{DateFormat(date)}</p>
              </small>
              <br />
            </li>
          ))}
        </ul>
      </section> */}

         
        </section>
      </div>
    </Layout>
  );
};

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

