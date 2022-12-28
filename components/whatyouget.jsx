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
          What We Offer
        </h1>
        <p className='text-center max-w-5xl text-lg font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 mb-8'>
          Ajez Media guarantees results.
        </p>
      </motion.div>
      <div className='flex flex-col justify-center grow mt-16'>
        <div
          className='
        grid grid-cols-auto gap-8 place-items-center w-full sm:px-6 lg:px-8 lg:grid-cols-3
        '
        >
          <Card
            title='ROI Focused'
            description="We're not just any old social media agency, we're an ROI-focused one. We'll get you real results by providing a personalized marketing strategy and copywriting tailored to your business goals."
          />
          <Card
            title='Optimized Ads'
            description="Whether it's through our Facebook advertising services or content management services, we'll help you optimize your advertising and web presence so that you can grow with your customers."
          />
          <Card
            title='No hidden fees or catches'
            description="You won't be charged any hidden fees or surprises with our service. Our rates are all-inclusive and we offer a clear breakdown of what we deliver and how much it costs upfront."
          />
        </div>
      </div>
    </section>
  );
}

export default WhatYouGet;
