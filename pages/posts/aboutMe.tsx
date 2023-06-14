import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
// import Script from 'next/script'

export default function FirstPost() {
  return (
    <Layout>
      <div className="w-auto h-auto flex flex-col items-center">
        <p className="w-auto text-4xl pb-8 lg:text-6xl font-semibold lg:pb-32">Esteban Del Cid</p>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-[267px] h-[267px]  lg:min-w-[400px] lg:h-[377px] ">
            <Image
              priority
              src="/images/profile-pic.jpg"
              className="relative lg:left-12 h-[267px] w-[267px] lg:w-[306px] lg:h-[377px] rounded-[24px] "
              height={400}
              width={400}
              alt="Profile-picture"
              style={{ objectFit: "cover" }}
            />
          </div>
          <Head>
            <title>About Me</title>
          </Head>
          <section className="px-10 pt-8 pb-16 text-[18px] font-medium flex flex-col space-y-4">
            <h1 className="text-[28px] font-semibold lg:text-4xl">About Me</h1>
            <p>
              I’m excited to continue mi work experience and face new challenges
              in the passionate world of technology. One of my goals is to be
              part of a tech company where I can put all my knowledges in
              practice that I get from my studies, jobs and continue learning in
              a work environment. I’ma frontend developer student and I love the
              world of technology. Work hard every day to improve my skills and
              I’ve the necessary abilities to carry out projects in the best
              way.
            </p>
            <p>
              I’m enthusiastic to lear and growing in professionally, and I’m
              committed to give a high level of dedication, overcoming and
              responsibility with my work. I would like to be a part of a
              dynamic team where I can contribute and develop as a professional.
            </p>

            <p>
              Begin aware that there is always more to learn, I constantly
              search new opportunities to improve my skills and keep up to date
              of the latest trends in web development.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
