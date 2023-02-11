import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import BookACall from "../components/bookACall";

function Schedule() {
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
      <main className='min-h-screen w-full flex flex-col justify-between bg-main-light dark:bg-main-dark'>
        <Header className='w-screen' />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 1 }}
        >
          <section className='gap-8 flex flex-row w-full grow p-12'>
            <div className='grow'>
              <BookACall />
            </div>
            <div class='max-w-5xl grid gap-8 px-4 py-8 mx-auto '>
              <div class='lg:col-span-7'>
                <picture>
                  <img
                    src='/dude.jpg'
                    alt='dude'
                    class='w-80 h-80 mb-6 object-cover object-center rounded-full shadow-md'
                  />
                </picture>
                <h1 class='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
                  Free 15-Minute Demo Call
                </h1>
                <p class='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                  By the end of this Audit call, you will have a clear
                  understanding of the next steps you can take for your business
                  to start generating consistent and reliable results online
                  with Funnels & Paid Advertising.
                  <br />
                  <br />
                  Find a time on {"Vincent's"} calendar to schedule your call
                  today and we look forward to speaking to you soon!
                  <br />
                  <br />
                  <h1 class='max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-slate-300'>
                    THIS AUDIT CALL IS PERFECT FOR:
                  </h1>
                  <ul class='list-disc list-outside text-gray-500 dark:text-gray-400'>
                    <li>
                      Businesses looking to convert their current website into a
                      high quality & streamlined funnel format.
                    </li>
                    <li>
                      Businesses looking to take their offline business online
                      Businesses looking to understand their increased revenue
                      potential with funnels & conversion rate optimization.
                    </li>
                    <li>
                      Businesses looking to maximize their conversion rates &
                      verage order value.
                    </li>
                    <li>
                      Businesses looking for a reliable agency that can make
                      their company a priority.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </section>
        </motion.div>
        <Footer />
      </main>
    </>
  );
}

export default Schedule;
