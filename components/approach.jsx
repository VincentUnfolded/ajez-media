import { Timeline } from "flowbite-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Approach() {
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  return (
    <section className='bg-approach dark:bg-approach-dark min-h-xl p-12 flex flex-col items-center'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mb-2'>
          What We Do
        </h1>
        <p className='text-center max-w-5xl text-lg font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
          Our approach can be broken down into 4 steps, research, plan, target,
          and launch. These 4 steps ensure that we make custom, efficient and
          profitable advertising:
        </p>
      </motion.div>
      <div>
        <Timeline className='max-w-5xl'>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -100 }}
            transition={{ duration: 1 }}
          >
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Step 1</Timeline.Time>
                <Timeline.Title>Research</Timeline.Title>
                <Timeline.Body>
                  We first study your audience to deeply understand their
                  interests, behaviors, motivators and emotional drivers.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -100 }}
            transition={{ duration: 1 }}
          >
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Step 2</Timeline.Time>
                <Timeline.Title>Plan</Timeline.Title>
                <Timeline.Body>
                  Based on the researched data we work on your messaging by
                  coming up with the best angles and hooks to use on your
                  advertising campaigns.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </motion.div>
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -100 }}
            transition={{ duration: 1 }}
          >
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Step 3</Timeline.Time>
                <Timeline.Title>Target</Timeline.Title>
                <Timeline.Body>
                  We then find the best interests and keywords to target on
                  Facebook and Google in order to reach your exact target
                  audience.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </motion.div>
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : -100 }}
            transition={{ duration: 1 }}
          >
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>Step 4</Timeline.Time>
                <Timeline.Title>Launch!</Timeline.Title>
                <Timeline.Body>
                  Once {" that's "} done, we launch your advertising campaign
                  with said assets and deploy our proprietary camapign strategy
                  to ensure you get the best result out of every dollar that you
                  invest.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </motion.div>
        </Timeline>
      </div>
    </section>
  );
}

export default Approach;
