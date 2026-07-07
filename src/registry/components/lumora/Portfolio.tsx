import React from 'react';

export default function Portfolio() {
  return (
    <>
      <section id="works" className="section-works">
    <div className="shell">
      <div className="works-eb reveal-el"><div className="eyebrow dark" style={{"opacity":"1","transform":"none"}}><div className="eyebrow-dot"></div> Portfolio</div></div>
      <h2 className="works-h2 reveal-lines" data-delay="120" data-stagger="0">Selected Work</h2>
      <ul className="works-grid">
        <li className="work-li reveal-el" style={{"transitionDelay":"0ms"}}>
          <a href="#" className="work-card">
            <div className="work-meta"><span>Branding — 2025</span><div className="work-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></div></div>
            <div className="work-watermark"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></svg><span>®</span></div>
            <div className="work-bottom">
              <h3 className="work-h3">Aster Labs</h3>
              <p className="work-desc">A complete identity and go-to-market system for a fast-moving research startup.</p>
              <div className="work-tags"><span className="tag-chip">Branding</span><span className="tag-chip">Strategy</span><span className="tag-chip">Design</span></div>
            </div>
          </a>
        </li>
        <li className="work-li reveal-el" style={{"transitionDelay":"90ms"}}>
          <a href="#" className="work-card">
            <div className="work-meta"><span>Product — 2024</span><div className="work-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></div></div>
            <div className="work-watermark"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></svg><span>®</span></div>
            <div className="work-bottom">
              <h3 className="work-h3">Nova Finance</h3>
              <p className="work-desc">A finance platform reimagined — clear data, calm interfaces, and effortless flows.</p>
              <div className="work-tags"><span className="tag-chip">Product Design</span><span className="tag-chip">Web App</span><span className="tag-chip">QA</span></div>
            </div>
          </a>
        </li>
        <li className="work-li reveal-el" style={{"transitionDelay":"180ms"}}>
          <a href="#" className="work-card">
            <div className="work-meta"><span>Identity — 2023</span><div className="work-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></div></div>
            <div className="work-watermark"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></svg><span>®</span></div>
            <div className="work-bottom">
              <h3 className="work-h3">Helio Studio</h3>
              <p className="work-desc">A bold visual identity and art direction system built to scale across every surface.</p>
              <div className="work-tags"><span className="tag-chip">Brand Identity</span><span className="tag-chip">Art Direction</span></div>
            </div>
          </a>
        </li>
        <li className="work-li reveal-el" style={{"transitionDelay":"270ms"}}>
          <a href="#" className="work-card">
            <div className="work-meta"><span>Mobile — 2023</span><div className="work-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></div></div>
            <div className="work-watermark"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></svg><span>®</span></div>
            <div className="work-bottom">
              <h3 className="work-h3">Pulse Health</h3>
              <p className="work-desc">A wellness app grounded in research, shipped end to end from concept to release.</p>
              <div className="work-tags"><span className="tag-chip">Mobile App</span><span className="tag-chip">UX Research</span><span className="tag-chip">Development</span></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
    </>
  );
}
