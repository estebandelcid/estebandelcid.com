import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import DateFormat from "../../lib/date";
import { GetStaticProps, GetStaticPaths } from 'next';

export const getStaticProps: GetStaticProps = async ({ params }) => {
    //Add the 'await' keyword like this;
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback:false
    }
}


export default function Post({postData}: {postData:{
  title: string
  date: string
  contentHtml: string
}}) {
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

