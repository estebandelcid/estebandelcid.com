import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import ListOfCards from "../components/ListOfCards";
import ListOfWorks from "../components/ListOfWorks";
import { AnimatedDivider } from "../components/AnimatedDivider";

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="h-auto">
        <section className="h-full">
          <ListOfWorks />
                <AnimatedDivider className="w-full" />
          <ListOfCards />
        </section>
      </div>
    </Layout>
  );
};



