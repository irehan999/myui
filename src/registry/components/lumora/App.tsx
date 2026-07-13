import React from 'react';
import { styles } from './styles';
import { useLumoraScript } from './useLumoraScript';
import Loader from './Loader';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import Footer from './Footer';
import Overlays from './Overlays';

export default function LumoraReactApp() {
  useLumoraScript();

  return (
    <div className="lumora-theme" style={{ position: "relative" }}>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <a href="#main" className="sr-only focus-visible:not-sr-only" style={{position: 'fixed', left: '1rem', top: '1rem', zIndex: 60, borderRadius: '.875rem', background: '#0a0a0a', padding: '.5rem 1rem', fontSize: '.875rem', color: '#fff'}}>Skip to content</a>
      
      <Loader />
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
