import Head from "next/head";
import Layout  from "../components/layout";       
// import Script from 'next/script'


export default function FirstPost() {
  return (
    <Layout className="bg-green-200">
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
      <section className="px-10">
        <h1 className="text-[22px] font-semibold my-4">
          About Me
        </h1>
        <p className=' font-medium text-[18px]'>
          Estar con una empresa líder en el ramo, para contribuir y poner en
          práctica los conocimientos que sigo adquiriendo académicamente, y que
          me brinde oportunidad de crecer en el área laboral, intelectual y
          profesionalmente, ofreciendo un alto compromiso, superación y
          responsabilidad al trabajo.
        </p>
      </section>
    </Layout>
  );
}
