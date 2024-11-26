import React from 'react';
import './globals.css';
// import type { AppProps } from 'next/app';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Gallery from '@/Components/Gallery';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>

  );
};

export default Home;
