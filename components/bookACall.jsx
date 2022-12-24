import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function BookACall() {
  const [ref, inView] = useInView();

  return (
    <section
      id='book-a-call'
      className='min-h-full bg-approach dark:bg-approach-dark flex flex-col justify-center'
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <InlineWidget
          url='https://calendly.com/ajez-media/strategy-call'
          styles={{
            height: "100vh",
            margin: "0 auto",
            border: "none",
            overflow: "hidden",
          }}
        />
      </motion.div>
    </section>
  );
}

export default BookACall;
