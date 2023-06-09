import Head from "next/head";
import Layout  from "../../components/Layout";       
// import Script from 'next/script'


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      {/* <Script 
      src="https://connect.facebook.net/en_US/sdk.js" 
      strategy="lazyOnload"
      onLoad={()=>
    console.log(`script loaded correctly, window.FB has been populated`)
    }
      /> */}
      <section className="px-10 text-[18px] font-medium flex flex-col space-y-4 my-4">
        <h1 className="text-[22px] font-semibold">About Me</h1>
        <p>
          I’m excited to continue mi work experience and face new challenges in
          the passionate world of technology. One of my goals is to be part of a
          tech company where I can put all my knowledges in practice that I get
          from my studies, jobs and continue learning in a work environment.
          I’ma frontend developer student and I love the world of technology.
          Work hard every day to improve my skills and I’ve the necessary
          abilities to carry out projects in the best way.
        </p>
        <p>
          I’m enthusiastic to lear and growing in professionally, and I’m
          committed to give a high level of dedication, overcoming and
          responsibility with my work. I would like to be a part of a dynamic
          team where I can contribute and develop as a professional.
        </p>

        <p>
          Begin aware that there is always more to learn, I constantly search
          new opportunities to improve my skills and keep up to date of the
          latest trends in web development.
        </p>
      </section>
    </Layout>
  );
}
