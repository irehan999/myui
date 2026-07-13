import React from 'react';
import Hero from './Hero';
import QuoteSection from './QuoteSection';

export default function SereneApp() {
  return (
    <div className="bg-[#0a0608] min-h-screen text-white font-inter">
      <Hero />
      <QuoteSection />
    </div>
  );
}
