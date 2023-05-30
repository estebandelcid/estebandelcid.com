import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import DateFormat from "../components/date";

export async function getStaticProps({ params }) {
    //Add the 'await' keyword like this;
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback:false
    }
}


export default function Post({postData}) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className=" text-[2rem] leading-snug font-extrabold my-4 mx-2">
            {postData.title}
          </h1>
          <div className=" text-[#666] my-4">
            <p>{DateFormat(postData.date)}</p>
          </div>
          <div
            className="mx-2 "
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </Layout>
    );
}

