import { motion } from "framer-motion";

function Header() {
  return (
    <header>
      <nav class='px-4 lg:px-6 py-2 pt-12'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          class='flex items-center mx-auto max-w-screen-xl'
        >
          <picture className='hidden dark:block'>
            <img
              src='/iconDark.svg'
              class='mr-3 h-6 sm:h-9'
              alt='Ajez Media Logo'
            />
          </picture>
          <picture className='block dark:hidden'>
            <img
              src='/icon.svg'
              class='mr-3 h-6 sm:h-9'
              alt='Ajez Media Logo'
            />
          </picture>
          <span class='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Ajez Media - See You At Profit.
          </span>
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
