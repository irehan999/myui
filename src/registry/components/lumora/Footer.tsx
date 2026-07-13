import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="footer">
  <div className="shell">
    <div className="foot-cta">
      <h2 className="foot-h2 reveal-lines" data-delay="100" data-stagger="100">Have a project in mind? Let's get to work.</h2>
      <button className="pill-btn" onClick={() => { if ((window as any).openModal) (window as any).openModal(); }}>
        <span className="pill-inner pill-light pill-py-arrow">
          Start a project
          <span className="pill-badge"><svg className="up-right" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></span>
        </span>
      </button>
    </div>
    <div className="foot-cols">
      <div>
        <div className="foot-brand"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></svg> Lumora</div>
        <p className="foot-tagline">An independent studio crafting brands, products, and the systems that connect them.</p>
      </div>
      <div>
        <h3 className="col-title">Company</h3>
        <ul className="col-links">
          <li><a href="#about" className="anim-link">About</a></li>
          <li><a href="#careers" className="anim-link">Careers</a></li>
          <li><a href="#partners" className="anim-link">Partners</a></li>
          <li><button onClick={() => { if ((window as any).openModal) (window as any).openModal(); }} className="anim-link">Contact</button></li>
        </ul>
      </div>
      <div>
        <h3 className="col-title">Services</h3>
        <ul className="col-links">
          <li><a href="#development" className="anim-link">Development</a></li>
          <li><a href="#design" className="anim-link">Design</a></li>
          <li><a href="#qa" className="anim-link">Quality Assurance</a></li>
          <li><a href="#consulting" className="anim-link">Consulting</a></li>
        </ul>
      </div>
      <div>
        <h3 className="col-title">Social</h3>
        <ul className="col-links">
          <li><a href="#" className="anim-link">X / Twitter</a></li>
          <li><a href="#" className="anim-link">Behance</a></li>
          <li><a href="#" className="anim-link">Dribbble</a></li>
          <li><a href="#" className="anim-link">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div className="foot-legal">
      <span>© 2025 Lumora Studio. All rights reserved.</span>
      <div className="legal-links">
        <a href="#privacy" className="legal-link">Privacy</a>
        <a href="#terms" className="legal-link">Terms</a>
      </div>
    </div>
  </div>
  <div className="foot-watermark">LUMORA</div>
</footer>
    </>
  );
}
