import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MainContentArea from './MainContentArea/MainContentArea';

function HomePage() {
  return (
    <div id="dtr-wrapper" class="clearfix">
      <Header />
      <MainContentArea />
      <Footer />
    </div>
  );
}

export default HomePage;