import Link from "next/link";

function Footer() {
  return (
    <footer class='p-4 md:p-8 lg:p-10'>
      <div class='mx-auto max-w-screen-xl text-center'>
        <Link
          href='#'
          class='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'
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
          Ajez Media
        </Link>
        <p class='my-6 text-gray-500 dark:text-gray-400'>
          Generating leads for your business in real time.
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
  );
}

export default Footer;
