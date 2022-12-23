import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Approach() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  return (
    <div class='bg-slate-900 mt-12 py-24 pb-6 sm:pb-8 lg:pb-12'>
      <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <section class='flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16'>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: -100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 1 }}
            class='xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24'
          >
            <h2 class='text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-200 mb-8'>
              Our Approach
            </h2>
            <div className='text-lg text-justify text-slate-200 mt-8'>
              <p>What we do is very simple:</p>
              <p class='  mt-4'>
                We first study your audience to deeply understand their
                interests, behaviors, motivators and emotional drivers.
              </p>
              <p class='mt-4'>
                Based on this data we work on your messaging by coming up with
                the best angles and hooks to use on your advertising campaigns.
              </p>
              <p class='mt-4'>
                We then find the best interests and keywords to target on
                Facebook and Google in order to reach your exact target
                audience.
              </p>
              <p class=' mt-4'>
                {
                  "Once that's done, we launch your advertising campaign with said assets and deploy our proprietary camapign strategy to ensure you get the best result out of every dollar that you invest."
                }
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: 100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 1 }}
            class='xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg'
          >
            <img
              src='https://images.unsplash.com/photo-1585250003309-694ff34512d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              loading='lazy'
              alt='Photo by Pixabay from Pexels'
              class='w-full h-full object-cover object-center'
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Approach;
