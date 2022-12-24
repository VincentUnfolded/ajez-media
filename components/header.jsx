function Header() {
  return (
    <header>
      <nav class='px-4 lg:px-6 py-2 pt-12'>
        <div class='flex items-center mx-auto max-w-screen-xl'>
          <picture className='hidden dark:block'>
            <img
              src='iconDark.svg'
              class='mr-3 h-6 sm:h-9'
              alt='Ajez Media Logo'
            />
          </picture>
          <picture className='hidden dark:hidden'>
            <img src='icon.svg' class='mr-3 h-6 sm:h-9' alt='Ajez Media Logo' />
          </picture>
          <span class='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Ajez Media - See You At Profit.
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
