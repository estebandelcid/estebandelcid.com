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
        <section className=" w-full h-full grid mb-8 items-center place-items-center text-[22px] ">
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



