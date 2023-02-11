import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

function About() {
  const [ref, inView] = useInView();
  return (
    <>
      <Head>
        <title>Ajez Media</title>
        <meta
          name='description'
          content='Growing your business through Social Media Marketing.'
        />
        <meta
          name='keywords'
          content='social media marketing, smma, ajez media, media, ajez, marketing, increase sales, social media growth, business'
        />
        <meta name='author' content='Ajez Media' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#000000' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ajezmedia' />
        <meta name='twitter:creator' content='@ajezmedia' />
        <meta name='twitter:title' content='Ajez Media' />
      </Head>
      <main className='min-h-screen w-screen flex flex-col justify-between items-center bg-main-light dark:bg-main-dark'>
        <Header className='w-screen' />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 1 }}
        >
          <section className='flex flex-col items-center justify-center w-full grow p-12 flex flex-col items-center'>
            <div>
              <h1 className='text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mb-2'>
                About Ajez Media
              </h1>
              <p className='text-justify mt-16 max-w-5xl text-lg font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                At Ajez Media, we focus on delivering the most exceptional
                advertising solution for real estate agents.
                <br />
                <br />
                We are a small but mighty team of experts who have a deep
                understanding of the real estate industry and the ability to
                reach the right people with advertising, resulting in an
                increase in leads and conversions.
                <br />
                <br />
                We pride ourselves on sticking to the golden fundamentals of
                advertising, rather than chasing after the latest trends.
                <br />
                <br />
                {
                  "Not only that but we're dedicated to helping our clients succeed and plant the seed that will make them capable of reaching new heights of success in their careers."
                }
              </p>
            </div>
          </section>
        </motion.div>
        <Footer />
      </main>
    </>
  );
}

export default About;
