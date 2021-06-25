import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import HeroBanner from '../HeroBanner/HeroBanner';
import Services from '../Services/Services';
import Special from '../Special/Special';
import Subscribe from '../Subscribe/Subscribe';
import Testimonials from '../Testimonials/Testimonials';

function MainContentArea() {
  return (
    <div id="dtr-main-content">
      <HeroBanner />
      <Features />
      <About />
      <Subscribe />
      <Special />
      <Testimonials />
      <Services />
    </div>
  );
}

export default MainContentArea;