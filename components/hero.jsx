import { Button } from "flowbite-react";
import Header from "./header";
import { motion } from "framer-motion";

import { Player } from "@lottiefiles/react-lottie-player";

function Hero() {
  return (
    <>
      <section className='min-h-xl flex flex-col gap-4'>
        <Header />
        <div className='grow flex flex-col justify-center items-center'>
          <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='mr-auto place-self-center lg:col-span-7'
            >
              <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
                Sell More With Social Media.
              </h1>
              <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                We help you grow your business with social media marketing.
              </p>
              <Button
                onClick={() => {
                  window.document.getElementById("book-a-call").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Book A Call
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='lg:mt-0 lg:col-span-5'
            >
              <Player
                autoplay
                loop
                src='https://assets7.lottiefiles.com/packages/lf20_osdxlbqq.json'
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
