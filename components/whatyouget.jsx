import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";
import Card from "./card";

function WhatYouGet() {
  const [ref, inView] = useInView();

  return (
    <section className='bg-whatuget dark:bg-whatuget-dark min-h-xl p-12 flex flex-col items-center'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mb-2'>
          What You Get
        </h1>
        <p className='text-center max-w-5xl text-lg font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mb-8'>
          Our services ensure that you get the best results from your ads:
        </p>
      </motion.div>
      <div className='flex flex-col justify-center grow mt-16'>
        <div
          className='
        grid grid-cols-auto gap-8 place-items-center w-full sm:px-6 lg:px-8 lg:grid-cols-3
        '
        >
          <Card
            title='Engagement'
            description='We use special techniques to increase your engagement and grow your audience.'
            icon={
              <Player
                autoplay
                loop
                src='https://assets1.lottiefiles.com/packages/lf20_dyimsq5i.json'
              />
            }
          />
          <Card
            title='Brand Exposure'
            description='We use well-researched data to put your brand in front of the correct audience and increase your chances of getting leads.'
            icon={
              <Player
                autoplay
                loop
                src='https://assets9.lottiefiles.com/packages/lf20_5tl1xxnz.json'
              />
            }
          />
          <Card
            title='Ads That Convert'
            description='We use the latest techniques to create ads that convert and get you more leads.'
            icon={
              <Player
                autoplay
                loop
                src='https://assets2.lottiefiles.com/packages/lf20_n4uytpvo.json'
              />
            }
          />
        </div>
      </div>
    </section>
  );
}

export default WhatYouGet;
