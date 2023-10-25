import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import ListOfCards from "../components/ListOfCards";

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className=" h-auto w-screen ">
        <section className=" w-full h-full grid mb-8 items-center place-items-center">
          <ListOfCards />
        </section>
      </div>
    </Layout>
  );
};



