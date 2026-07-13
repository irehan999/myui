import React, { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="font-dancing text-white text-2xl md:text-3xl">Serene</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {['About', 'Services', 'Journal', 'Contact'].map((link) => (
            <a key={link} href="#" className="text-white/80 hover:text-white text-sm tracking-wide transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow">
            Book a consultation
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative z-50 w-6 h-5 flex flex-col justify-between items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-full h-[2px] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <span className={`block w-full h-[2px] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
          <span className={`block w-full h-[2px] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-[#0a0608]/95 backdrop-blur-xl border-l border-white/10 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col px-8 py-24 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col gap-8">
          {['About', 'Services', 'Journal', 'Contact'].map((link, i) => (
            <a
              key={link}
              href="#"
              className="text-white text-2xl font-instrument transition-all duration-500 ease-out"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                transitionDelay: isMenuOpen ? `${150 + i * 75}ms` : '0ms'
              }}
            >
              {link}
            </a>
          ))}
        </div>
        <div 
          className="mt-12 transition-all duration-500 ease-out"
          style={{
            opacity: isMenuOpen ? 1 : 0,
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
            transitionDelay: isMenuOpen ? '450ms' : '0ms'
          }}
        >
          <button className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow w-full">
            Book a consultation
          </button>
        </div>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center -mt-[120px] px-4 w-full max-w-[100vw] overflow-hidden pointer-events-none">
        <h1 className="font-instrument text-white text-[13vw] sm:text-[9vw] md:text-7xl lg:text-[110px] leading-[1.1] md:leading-[0.9] tracking-tight text-center text-glow w-full max-w-5xl mx-auto px-2">
          Gentle touch.<br /> Radiant presence.
        </h1>
        <p className="text-white/70 text-sm sm:text-base text-center mt-5 md:mt-7 max-w-xl px-2">
          Expert beauty and holistic wellness, delivered with warmth and intention.
        </p>
        <button className="pointer-events-auto bg-white text-black px-6 md:px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow mt-6 md:mt-9">
          Begin your renewal
        </button>
      </div>

      {/* Sound Indicator (Desktop only) */}
      <div className="hidden md:flex absolute bottom-8 left-8 z-20 items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
          <div className="w-3 h-[2px] bg-white/60"></div>
        </div>
        <div className="flex flex-col text-white/60 text-xs">
          <span>Experience</span>
          <span>with sound</span>
        </div>
      </div>
    </section>
  );
}
