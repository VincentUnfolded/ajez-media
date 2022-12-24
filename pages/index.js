import Head from "next/head";
import Approach from "../components/approach";
import BookACall from "../components/bookACall";
import Hero from "../components/hero";
import Footer from "../components/footer";
import WhatYouGet from "../components/whatyouget";

function App() {
  return (
    <>
      <Head>
        <title>Ajez Media</title>
        <meta
          name='description'
          content='Growing your business through Social Media Marketing.'
        />
        <meta
          name='keywords'
          content='social media marketing, smma, ajez media, media, ajez, marketing, increase sales, social media growth, business'
        />
        <meta name='author' content='Ajez Media' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#000000' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ajezmedia' />
        <meta name='twitter:creator' content='@ajezmedia' />
        <meta name='twitter:title' content='Ajez Media' />
      </Head>
      <main
        className='min-h-screen 
        bg-main-light dark:bg-main-dark'
      >
        <Hero />
        <Approach />
        <WhatYouGet />
        <BookACall />
        <Footer />
      </main>
    </>
  );
}

export default App;
