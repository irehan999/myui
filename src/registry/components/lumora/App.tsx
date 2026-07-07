import React from 'react';
import { styles } from './styles';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import Footer from './Footer';
import Overlays from './Overlays';

export default function LumoraReactApp() {
  return (
    <div className="lumora-theme" style={{ position: "relative" }}>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Portfolio />
        <Services />
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}
