import React from 'react';

export default function Hero() {
  return (
    <>
      <section id="home">
    <div className="liquid-bg" id="liquidBg">
      <img src="https://api.getlayers.ai/storage/v1/object/public/public/assets/lumora-e8b711fc68/hero/after.jpg" alt="" />
      <canvas id="liquidCanvas" aria-hidden="true"></canvas>
    </div>
    <div className="hero-vignette"></div>
    <div id="watermark" className="hero-watermark">LUMORA</div>
    
    <div className="hero-grid shell">
      <div className="hero-left">
        <div className="eyebrow dark" id="heroEyebrow">
          <div className="eyebrow-dot"></div> Independent Studio
        </div>
        <h1 className="hero-h1 reveal-lines" id="heroH1" data-delay="250" data-stagger="120">
          Bold ideas,
          shipped with
          quiet precision
        </h1>
        <div className="rating-row" id="heroRating">
          <span className="stars">
            <svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" /></svg>
            <svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" /></svg>
            <svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" /></svg>
            <svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" /></svg>
            <svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" /></svg>
          </span>
          <span>200+ brands shipped</span>
        </div>
        <div className="cta-row" id="heroCtas">
          <button className="pill-btn" onClick={() => { if ((window as any).openModal) (window as any).openModal(); }}>
            <span className="pill-inner pill-dark pill-py-arrow">
              Let's Talk
              <span className="pill-badge"><svg className="up-right" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></span>
            </span>
          </button>
          <button className="pill-btn" onClick={() => { if ((window as any).scrollToId) (window as any).scrollToId('works'); }}>
            <span className="pill-inner pill-outline pill-py-noarrow">View Work</span>
          </button>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="hero-card" id="heroCard" onClick={() => { if ((window as any).nextCard) (window as any).nextCard(); }}>
          <div className="hero-card-inner">
            <div className="hero-card-img"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></svg></div>
            <div className="hero-card-content">
              <div className="hero-card-slot" id="cardSlot">
                <div className="hero-card-slot-item active" data-idx="0">
                  <div className="hcc-caption">Conversion design</div>
                  <div className="hcc-title">Crafted to convert.</div>
                </div>
                <div className="hero-card-slot-item next" data-idx="1">
                  <div className="hcc-caption">Engineering</div>
                  <div className="hcc-title">Built to scale.</div>
                </div>
                <div className="hero-card-slot-item next" data-idx="2">
                  <div className="hcc-caption">Brand systems</div>
                  <div className="hcc-title">Designed to last.</div>
                </div>
              </div>
              <div className="hcc-bottom">
                <div className="hcc-dots" id="cardDots">
                  <div className="hcc-dot active"></div><div className="hcc-dot inactive"></div><div className="hcc-dot inactive"></div>
                </div>
                <div className="hcc-nav">
                  <button className="hcc-btn prev" onClick={(event) => { event.stopPropagation(); if ((window as any).prevCard) (window as any).prevCard(); }}><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
                  <button className="hcc-btn" onClick={(event) => { event.stopPropagation(); if ((window as any).nextCard) (window as any).nextCard(); }}><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="partners" id="heroPartners">
          <div className="partners-lbl">Trusted by</div>
          <div className="partners-grid">
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" /><circle cx="12" cy="12" r="3.2" /></svg> Kaido</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" /><circle cx="12" cy="12" r="3.2" /></svg> Northpeak</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" /><circle cx="12" cy="12" r="3.2" /></svg> Vellum</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" /><circle cx="12" cy="12" r="3.2" /></svg> Orbit</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" /><circle cx="12" cy="12" r="3.2" /></svg> Brightline</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" /><circle cx="12" cy="12" r="3.2" /></svg> Cobalt</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" /><circle cx="12" cy="12" r="3.2" /></svg> Mesa</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="hero-status shell" id="heroStatus">
      <span>Working since 2014</span>
      <span style={{"display":"none"}} className="md-block">Remote-first, worldwide</span>
      <span style={{"display":"inline-flex","gap":".5rem"}}>Scroll to explore ↓</span>
    </div>
    <style> @media(min-width:640px)&#123;.md-block&#123;display:inline!important&#125;&#125; </style>
  </section>
    </>
  );
}
