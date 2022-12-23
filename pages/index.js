import Head from "next/head";
import { InlineWidget } from "react-calendly";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Approach from "../components/approach";

/* eslint-disable @next/next/no-img-element */
function App() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  return (
    <>
      <Head>
        <title>Ajez Media</title>
        <meta
          name='description'
          content='Helping businesses to sell more through social media marketing'
        />
        <link rel='icon' href='/icon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Ajez Media' />
      </Head>
      <div class='bg-white pb-6 sm:pb-8 lg:pb-12'>
        <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <header class='flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16'>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href='/'
                class='inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5'
                aria-label='logo'
              >
                <img src='./icon.svg' alt='logo' class='w-16 h-16' />
                Ajez Media
              </Link>
            </motion.div>
          </header>

          <section class='flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16'>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: -100 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 1 }}
              class='xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24'
            >
              <p class='text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6'>
                WHAT WE DO
              </p>

              <h1 class='text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12'>
                We Help Businesses To Sell More Through Social Media Marketing
              </h1>
              <div class='flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5'>
                <button
                  href='#'
                  class='inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
                >
                  Book Your Call Now
                </button>
              </div>
            </motion.div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 0, x: 100 }}
              animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: 1 }}
              class='xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg'
            >
              <img
                src='/laptop1.jpg'
                loading='lazy'
                alt='Photo by Pixabay from Pexels'
                class='w-full h-full object-cover object-center'
              />
            </motion.div>
          </section>
        </div>
      </div>
      <Approach />
      <InlineWidget url='https://calendly.com/ajez-media' />
      <footer class='p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800'>
        <div class='mx-auto max-w-screen-xl text-center'>
          <span class='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'>
            Ajez Media
          </span>
          <p class='my-6 text-gray-500 dark:text-gray-400'>
            We Help Businesses To Sell More Through Social Media Marketing.
          </p>

          <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2022{" "}
            <a href='#' class='hover:underline'>
              Ajez Media
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
