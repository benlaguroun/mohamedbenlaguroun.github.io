// src/pages/Home.js

import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
