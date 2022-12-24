function Footer() {
  return (
    <footer class='p-4 md:p-8 lg:p-10'>
      <div class='mx-auto max-w-screen-xl text-center'>
        <a
          href='#'
          class='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <svg
            class='mr-2 h-8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            width='33'
            height='33'
            version='1.1'
            viewBox='0 0 33 33'
            xmlSpace='preserve'
          >
            <defs>
              <clipPath id='clipPath16' clipPathUnits='userSpaceOnUse'>
                <path d='M0 1080h1920V0H0z'></path>
              </clipPath>
            </defs>
            <g transform='matrix(1.33333 0 0 -1.33333 0 1440)'>
              <g>
                <g clipPath='url(#clipPath16)'>
                  <g transform='translate(1542.425 798.5)'>
                    <path
                      fill='#000'
                      fillOpacity='1'
                      fillRule='nonzero'
                      stroke='none'
                      d='M0 0l-635.404-601.654 101.135-100.133L99.275-101.839 0 0m-675.297-561.877L-30.596 49.695c-55.424 44.92-101.102 83.759-148.958 119.698-15.744 11.823-37.071 22.712-55.94 22.872-194.77 1.657-389.564 1.627-584.335.079-18.927-.151-41.97-8.982-55.924-21.674-81.91-74.504-161.845-151.186-242.04-227.56-14.759-14.055-27.658-30.063-44.759-48.842l487.255-456.145m-552.379 441.354c41.377 52.438 76.08 104.695 119.035 148.941 66.729 68.736 138.195 133.006 209.795 196.765 13.984 12.452 37.685 19.52 56.966 19.647 207.832 1.374 415.677 1.206 623.513.247 17.93-.083 41.046-3.251 52.913-14.397C-54.927 126.868 53.718 21.051 162.609-84.494c4.156-4.029 5.268-11.199 9.715-21.226-15.211-16.103-30.357-33.573-46.974-49.509-201.829-193.557-404.101-386.653-605.636-580.515-32.92-31.667-60.119-39.285-97.071-2.666-121.368 120.275-244.617 238.685-368.539 356.341-98.556 93.572-199.158 184.99-281.78 261.546'
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          Ajez Media
        </a>
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
