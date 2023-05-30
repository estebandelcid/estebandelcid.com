import Link from "next/link";
import Head from "next/head";
import Layout  from "../components/layout";       
// import Script from 'next/script'


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script 
      src="https://connect.facebook.net/en_US/sdk.js" 
      strategy="lazyOnload"
      onLoad={()=>
    console.log(`script loaded correctly, window.FB has been populated`)
    }
      /> */}
      <section className="w-auto h-auto flex-colum align-center">
        <h1 className="text-xl font-semibold my-4 flex justify-center">First Post</h1>
        <p className="flex justify-end m-4">
          ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de
          las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
          relleno estándar de las industrias desde el año 1500, cuando un
          impresor (N. del T. persona que se dedica a la imprenta) desconocido
          usó una galería de textos y los mezcló de tal manera que logró hacer
          un libro de textos especimen. No sólo sobrevivió 500 años, sino que
          tambien ingresó como texto de relleno en documentos electrónicos,
          quedando esencialmente igual al original. Fue popularizado en los 60s
          con la creación de las hojas "Letraset", las cuales contenian pasajes
          de Lorem Ipsum, y más recientemente con software de autoedición, como
          por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
        </p>
      </section>
    </Layout>
  );
}
