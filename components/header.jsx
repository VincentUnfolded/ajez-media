/* eslint-disable @next/next/no-html-link-for-pages */
import { motion } from "framer-motion";

function Header() {
  return (
    <header>
      <nav class='w-full px-4 lg:px-6 py-2 pt-12 flex flex-between'>
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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          class='flex items-center mx-auto max-w-screen-xl'
        >
          <span
            class='mx-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-slate-500 dark:hover:text-slate-500 transition duration-100 ease-in-out
          '
          >
            <a href='/'>Home</a>
          </span>

          <span
            class='mx-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-slate-500 dark:hover:text-slate-500 transition duration-100 ease-in-out
          '
          >
            <a href='/about'>About</a>
          </span>
          <span
            class='mx-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-slate-500 dark:hover:text-slate-500 transition duration-100 ease-in-out
          '
          >
            <a href='/schedule'>Schedule A Meeting</a>
          </span>
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
