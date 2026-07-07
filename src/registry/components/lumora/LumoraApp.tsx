
import React, { useEffect, useState } from 'react';
import './styles.css';

export default function LumoraApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  
  useEffect(() => {
    // Add logic here if needed
  }, []);

  return (
    <div className="lumora-react-wrapper">
      
<a href="#main" className="sr-only focus-visible:not-sr-only" style={{"position":"fixed","left":"1rem","top":"1rem","zIndex":"60","borderRadius":".875rem","background":"#0a0a0a","padding":".5rem 1rem","fontSize":".875rem","color":"#fff"}}>Skip to content</a>

<div id="loader" className="loader">
  <div className="loader-content" id="loaderContent">
    <div className="loader-logo-row">
      <svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg>
      Lumora
    </div>
    <p className="loader-p">Bold ideas, shipped with quiet precision.</p>
  </div>
  <div className="loader-prog-block">
    <div className="loader-track"><div className="loader-fill" id="loaderFill"></div></div>
    <div className="loader-labels">
      <span>Loading</span>
      <span className="loader-count" id="loaderCount">000</span>
    </div>
  </div>
</div>

<header id="header" className="header">
  <div className="shell">
    <button className="brand-btn" >
      <svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg>
      Lumora
    </button>
    <nav>
      <ul className="nav-links">
        <li><button  aria-current="page">Home</button></li>
        <li><button >Work</button></li>
        <li><button >Services <span style={{"fontSize":".75rem","opacity":".6"}}>▾</span></button></li>
        <li><button >Studio</button></li>
        <li><button >Careers</button></li>
        <li><button >Contact</button></li>
      </ul>
    </nav>
    <div className="header-right">
      <div className="clock-chip">
        <span style={{"color":"rgba(17,17,17,.45)"}}>Local time</span>
        <span style={{"minWidth":"3.5rem","fontVariantNumeric":"tabular-nums","fontWeight":"500","color":"#111"}} id="liveTime">9:41am</span>
        <span style={{"color":"rgba(17,17,17,.3)"}}>•</span>
        <span style={{"fontWeight":"500"}} id="liveDate">12 March, 2025</span>
      </div>
      <button className="menu-btn" >
        <span className="menu-btn-inner">
          <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          <span className="menu-txt">Menu</span>
        </span>
      </button>
    </div>
  </div>
</header>

<main id="main">
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
            <svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>
            <svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>
            <svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>
            <svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>
            <svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z"/></svg>
          </span>
          <span>200+ brands shipped</span>
        </div>
        <div className="cta-row" id="heroCtas">
          <button className="pill-btn" >
            <span className="pill-inner pill-dark pill-py-arrow">
              Let's Talk
              <span className="pill-badge"><svg className="up-right" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></span>
            </span>
          </button>
          <button className="pill-btn" >
            <span className="pill-inner pill-outline pill-py-noarrow">View Work</span>
          </button>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="hero-card" id="heroCard" >
          <div className="hero-card-inner">
            <div className="hero-card-img"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg></div>
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
                  <button className="hcc-btn prev" ><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
                  <button className="hcc-btn" ><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="partners" id="heroPartners">
          <div className="partners-lbl">Trusted by</div>
          <div className="partners-grid">
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none"/><circle cx="12" cy="12" r="3.2"/></svg> Kaido</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none"/><circle cx="12" cy="12" r="3.2"/></svg> Northpeak</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none"/><circle cx="12" cy="12" r="3.2"/></svg> Vellum</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none"/><circle cx="12" cy="12" r="3.2"/></svg> Orbit</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none"/><circle cx="12" cy="12" r="3.2"/></svg> Brightline</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none"/><circle cx="12" cy="12" r="3.2"/></svg> Cobalt</span>
            <span className="partner-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none"/><circle cx="12" cy="12" r="3.2"/></svg> Mesa</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="hero-status shell" id="heroStatus">
      <span>Working since 2014</span>
      <span style={{"display":"none"}} className="md-block">Remote-first, worldwide</span>
      <span style={{"display":"inline-flex","gap":".5rem"}}>Scroll to explore ↓</span>
    </div>
    <style> @media(min-width:640px){.md-block{display:inline!important}} </style>
  </section>

  <section id="about" className="section-about">
    <div className="shell about-grid">
      <div className="about-left">
        <svg className="about-globe" viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" fill="none"><circle cx="12" cy="12" r="9.25"/><path d="M12 2.75c2.6 2.3 4 5.8 4 9.25s-1.4 6.95-4 9.25c-2.6-2.3-4-5.8-4-9.25s1.4-6.95 4-9.25zM2.75 12h18.5"/></svg>
        <div className="eyebrow dark" style={{"opacity":"1","transform":"none"}}><div className="eyebrow-dot"></div> The Studio</div>
        <div className="about-statement-box reveal-el">
          <svg viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" fill="none"><circle cx="12" cy="12" r="9.25"/><path d="M12 2.75c2.6 2.3 4 5.8 4 9.25s-1.4 6.95-4 9.25c-2.6-2.3-4-5.8-4-9.25s1.4-6.95 4-9.25zM2.75 12h18.5"/></svg>
          <span style={{"maxWidth":"14rem"}}>A distributed team building across every time zone.</span>
        </div>
      </div>
      <div className="about-right">
        <h2 className="about-h2 reveal-words">We partner with ambitious teams to ship <span style={{"color":"#8d8d8d"}}>digital products, brand systems, and the strategy that holds them together.</span></h2>
        <div className="about-footer reveal-el" style={{"transitionDelay":"200ms"}}>
          <div>
            <div style={{"fontSize":".875rem","color":"rgba(17,17,17,.45)"}}>Find us online</div>
            <div className="social-chips">
              <a href="#" className="social-chip sc-x" aria-label="X"><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"><path d="M4 4l16 16M4 20l16-16"/></svg></a>
              <a href="#" className="social-chip sc-other" aria-label="Behance"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="3.2"/></svg></a>
              <a href="#" className="social-chip sc-other" aria-label="Dribbble"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="3.2"/></svg></a>
            </div>
          </div>
          <button className="pill-btn" >
            <span className="pill-inner pill-outline pill-py-arrow">
              About Us
              <span className="pill-badge"><svg className="right" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <section style={{"background":"#fff"}}>
    <ul className="shell band-ul">
      <li className="band-li reveal-el" style={{"transitionDelay":"0ms"}}><div className="band-tile bt-1">We</div></li>
      <li className="band-li reveal-el" style={{"transitionDelay":"120ms"}}><div className="band-tile bt-2">Build</div></li>
      <li className="band-li reveal-el" style={{"transitionDelay":"240ms"}}><div className="band-tile bt-3"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div></li>
      <li className="band-li reveal-el" style={{"transitionDelay":"360ms"}}><div className="band-tile bt-4">Better</div></li>
    </ul>
  </section>

  <section id="works" className="section-works">
    <div className="shell">
      <div className="works-eb reveal-el"><div className="eyebrow dark" style={{"opacity":"1","transform":"none"}}><div className="eyebrow-dot"></div> Portfolio</div></div>
      <h2 className="works-h2 reveal-lines" data-delay="120" data-stagger="0">Selected Work</h2>
      <ul className="works-grid">
        <li className="work-li reveal-el" style={{"transitionDelay":"0ms"}}>
          <a href="#" className="work-card">
            <div className="work-meta"><span>Branding — 2025</span><div className="work-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></div></div>
            <div className="work-watermark"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg><span>®</span></div>
            <div className="work-bottom">
              <h3 className="work-h3">Aster Labs</h3>
              <p className="work-desc">A complete identity and go-to-market system for a fast-moving research startup.</p>
              <div className="work-tags"><span className="tag-chip">Branding</span><span className="tag-chip">Strategy</span><span className="tag-chip">Design</span></div>
            </div>
          </a>
        </li>
        <li className="work-li reveal-el" style={{"transitionDelay":"90ms"}}>
          <a href="#" className="work-card">
            <div className="work-meta"><span>Product — 2024</span><div className="work-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></div></div>
            <div className="work-watermark"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg><span>®</span></div>
            <div className="work-bottom">
              <h3 className="work-h3">Nova Finance</h3>
              <p className="work-desc">A finance platform reimagined — clear data, calm interfaces, and effortless flows.</p>
              <div className="work-tags"><span className="tag-chip">Product Design</span><span className="tag-chip">Web App</span><span className="tag-chip">QA</span></div>
            </div>
          </a>
        </li>
        <li className="work-li reveal-el" style={{"transitionDelay":"180ms"}}>
          <a href="#" className="work-card">
            <div className="work-meta"><span>Identity — 2023</span><div className="work-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></div></div>
            <div className="work-watermark"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg><span>®</span></div>
            <div className="work-bottom">
              <h3 className="work-h3">Helio Studio</h3>
              <p className="work-desc">A bold visual identity and art direction system built to scale across every surface.</p>
              <div className="work-tags"><span className="tag-chip">Brand Identity</span><span className="tag-chip">Art Direction</span></div>
            </div>
          </a>
        </li>
        <li className="work-li reveal-el" style={{"transitionDelay":"270ms"}}>
          <a href="#" className="work-card">
            <div className="work-meta"><span>Mobile — 2023</span><div className="work-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></div></div>
            <div className="work-watermark"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg><span>®</span></div>
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

  <section id="services" className="section-services">
    <div className="shell">
      <div className="eyebrow dark reveal-el" style={{"opacity":"0","transform":"translateY(10px)"}}><div className="eyebrow-dot"></div> Services</div>
      <h2 className="srv-h2 reveal-lines" data-delay="120" data-stagger="0">What we do best</h2>
      <ul>
        <li className="srv-li reveal-el" style={{"transitionDelay":"0ms"}}>
          <a href="#" className="srv-row">
            <span className="srv-idx">01</span>
            <h3 className="srv-h3">Software Development</h3>
            <p className="srv-desc">Scalable web & mobile products built to last.</p>
            <div className="srv-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></div>
          </a>
        </li>
        <li className="srv-li reveal-el" style={{"transitionDelay":"80ms"}}>
          <a href="#" className="srv-row">
            <span className="srv-idx">02</span>
            <h3 className="srv-h3">Product Design</h3>
            <p className="srv-desc">Interfaces that feel effortless and look sharp.</p>
            <div className="srv-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></div>
          </a>
        </li>
        <li className="srv-li reveal-el" style={{"transitionDelay":"160ms"}}>
          <a href="#" className="srv-row">
            <span className="srv-idx">03</span>
            <h3 className="srv-h3">Quality Assurance</h3>
            <p className="srv-desc">Rigorous testing for flawless, confident releases.</p>
            <div className="srv-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></div>
          </a>
        </li>
        <li className="srv-li reveal-el" style={{"transitionDelay":"240ms"}}>
          <a href="#" className="srv-row">
            <span className="srv-idx">04</span>
            <h3 className="srv-h3">Consulting</h3>
            <p className="srv-desc">Strategy and direction for ambitious teams.</p>
            <div className="srv-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></div>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section className="section-stats">
    <div className="shell">
      <div className="stats-panel reveal-el">
        <div className="eyebrow light"><div className="eyebrow-dot" style={{"background":"rgba(255,255,255,.6)"}}></div> By the numbers</div>
        <h2 className="stats-h2 reveal-lines" data-delay="120" data-stagger="0">Proof in the work, not the words.</h2>
        <ul className="stats-grid">
          <li className="stat-li reveal-el" style={{"transitionDelay":"0ms"}}>
            <div className="stat-num-wrap"><span className="stat-num" data-val="150">0</span>+</div>
            <div className="stat-lbl">Projects delivered</div>
          </li>
          <li className="stat-li reveal-el" style={{"transitionDelay":"90ms"}}>
            <div className="stat-num-wrap"><span className="stat-num" data-val="98">0</span>%</div>
            <div className="stat-lbl">Client retention</div>
          </li>
          <li className="stat-li reveal-el" style={{"transitionDelay":"180ms"}}>
            <div className="stat-num-wrap"><span className="stat-num" data-val="12">0</span></div>
            <div className="stat-lbl">Years of craft</div>
          </li>
          <li className="stat-li reveal-el" style={{"transitionDelay":"270ms"}}>
            <div className="stat-num-wrap"><span className="stat-num" data-val="40">0</span>+</div>
            <div className="stat-lbl">Team members</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</main>

<footer className="footer">
  <div className="shell">
    <div className="foot-cta">
      <h2 className="foot-h2 reveal-lines" data-delay="100" data-stagger="100">Have a project in mind? Let's get to work.</h2>
      <button className="pill-btn" >
        <span className="pill-inner pill-light pill-py-arrow">
          Start a project
          <span className="pill-badge"><svg className="up-right" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></span>
        </span>
      </button>
    </div>
    <div className="foot-cols">
      <div>
        <div className="foot-brand"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg> Lumora</div>
        <p className="foot-tagline">An independent studio crafting brands, products, and the systems that connect them.</p>
      </div>
      <div>
        <h3 className="col-title">Company</h3>
        <ul className="col-links">
          <li><a href="#about" className="anim-link">About</a></li>
          <li><a href="#careers" className="anim-link">Careers</a></li>
          <li><a href="#partners" className="anim-link">Partners</a></li>
          <li><button  className="anim-link">Contact</button></li>
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

<div id="navMenu" className="nav-overlay">
  <div className="shell nav-top">
    <div className="loader-logo-row" style={{"fontSize":"1.125rem"}}><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg> Lumora</div>
    <button className="nav-close" ><svg viewBox="0 0 24 24"><path d="M4 4l16 16M4 20l16-16"/></svg> Close</button>
  </div>
  <div className="shell nav-mid">
    <ul className="nav-list" id="navList">
      <li><button className="nav-item" ><span className="nav-idx">01</span><span className="nav-lbl">Home</span></button></li>
      <li><button className="nav-item" ><span className="nav-idx">02</span><span className="nav-lbl">Work</span></button></li>
      <li><button className="nav-item" ><span className="nav-idx">03</span><span className="nav-lbl">Services</span></button></li>
      <li><button className="nav-item" ><span className="nav-idx">04</span><span className="nav-lbl">Studio</span></button></li>
      <li><button className="nav-item" ><span className="nav-idx">05</span><span className="nav-lbl">Careers</span></button></li>
      <li><button className="nav-item" ><span className="nav-idx">06</span><span className="nav-lbl">Contact</span></button></li>
    </ul>
  </div>
  <div className="shell nav-bot">
    <span>Local time — <span id="navTime">9:41am</span></span>
    <button className="nav-start" >Start a project →</button>
  </div>
</div>

<div id="reqModal" className="modal-backdrop"  role="dialog" aria-modal="true">
  <div className="modal-panel" >
    <button className="modal-close" ><svg viewBox="0 0 24 24"><path d="M4 4l16 16M4 20l16-16"/></svg></button>
    <div id="modalFormWrap">
      <div style={{"marginBottom":"1.5rem","display":"flex","flexDirection":"column","gap":".375rem"}}>
        <div className="eyebrow dark"><div className="eyebrow-dot" style={{"background":"#b15f2c"}}></div> Start a project</div>
        <h2 className="modal-h2">Tell us what you're building.</h2>
      </div>
      <form className="modal-form" id="reqForm">
        <label><span className="modal-label">Name</span><input className="modal-input" type="text" required placeholder="Your name"></label>
        <label><span className="modal-label">Email</span><input className="modal-input" type="email" required placeholder="you@company.com"></label>
        <label><span className="modal-label">Project</span><textarea className="modal-input" rows="4" required style={{"resize":"none"}} placeholder="A few words about your project, timeline, and budget."></textarea></label>
        <div className="modal-bot">
          <span className="modal-note">We reply within one business day.</span>
          <button className="pill-btn" type="submit">
            <span className="pill-inner pill-dark pill-py-arrow">
              <span id="submitBtnTxt">Send request</span>
              <span className="pill-badge"><svg className="up-right" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></span>
            </span>
          </button>
        </div>
      </form>
    </div>
    <div id="modalSuccess" className="modal-success">
      <div className="badge"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z"/></svg></div>
      <h2>Request received</h2>
      <p>Thanks for reaching out — we'll get back to you within one business day.</p>
      <button className="pill-btn" >
        <span className="pill-inner pill-dark pill-py-noarrow">Close</span>
      </button>
    </div>
  </div>
</div>

<script type="importmap">
{ "imports": { "lenis": "https://unpkg.com/lenis@1.3.23/dist/lenis.mjs" } }
</script>
<script type="module">
import Lenis from 'lenis';

window.scrollTo(0, 0);
const lenis = new Lenis({ smoothWheel: true });
function raf(t){ lenis.raf(t); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

function stopScroll() {
  lenis.stop();
  document.documentElement.style.position = 'relative';
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.style.height = '100%';
}
function startScroll() {
  lenis.start();
  document.documentElement.style.removeProperty('position');
  document.documentElement.style.removeProperty('overflow');
  document.documentElement.style.height = '';
}

window.scrollToId = function(id) {
  stopScroll();
  setTimeout(() => {
    const el = document.getElementById(id);
    if(el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth' });
    setTimeout(startScroll, 100);
  }, 50);
}

function applyAdaptiveGrid(){
  const FONT_BASE = 16, baseWidth = 1920, coef = 0.6666;
  const w = window.innerWidth;
  const widthReduction = ((baseWidth - w) / baseWidth) * 100;
  const size = FONT_BASE - (FONT_BASE * (widthReduction * coef)) / 100;
  if (size > FONT_BASE) document.documentElement.style.fontSize = size + 'px';
  else document.documentElement.style.removeProperty('font-size');
}
applyAdaptiveGrid(); addEventListener('resize', applyAdaptiveGrid);

// Clock
function updateClock() {
  const d = new Date();
  let h = d.getHours(), m = d.getMinutes();
  const ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12 || 12;
  const timeStr = `${h}:${m.toString().padStart(2, '0')}${ampm}`;
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dateStr = `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
  document.getElementById('liveTime').textContent = timeStr;
  document.getElementById('liveDate').textContent = dateStr;
  document.getElementById('navTime').textContent = timeStr;
}
setInterval(updateClock, 1000); updateClock();

// Text Reveals Split
document.querySelectorAll('.reveal-lines').forEach(el => {
  const text = el.innerText;
  el.innerHTML = '';
  text.split('\n').forEach(line => {
    if(!line.trim()) return;
    const wrap = document.createElement('span'); wrap.className = 'line-wrap';
    const inner = document.createElement('span'); inner.className = 'line-inner';
    inner.textContent = line;
    wrap.appendChild(inner);
    el.appendChild(wrap);
    el.appendChild(document.createTextNode(' '));
  });
});
document.querySelectorAll('.reveal-words').forEach(el => {
  const html = el.innerHTML;
  el.innerHTML = '';
  const div = document.createElement('div'); div.innerHTML = html;
  Array.from(div.childNodes).forEach(node => {
    if(node.nodeType === 3) {
      node.textContent.split(/\s+/).forEach(word => {
        if(!word.trim()) return;
        const wrap = document.createElement('span'); wrap.className = 'word-wrap';
        const inner = document.createElement('span'); inner.className = 'word-inner'; inner.textContent = word + ' ';
        wrap.appendChild(inner); el.appendChild(wrap);
      });
    } else if(node.nodeType === 1) {
      const wrap = document.createElement('span'); wrap.className = 'word-wrap';
      const inner = document.createElement('span'); inner.className = 'word-inner'; inner.appendChild(node.cloneNode(true)); inner.innerHTML += ' ';
      wrap.appendChild(inner); el.appendChild(wrap);
    }
  });
});

let isReady = false;

// Observers
const observer = new IntersectionObserver((entries) => {
  entries.forEach(ent => {
    if(ent.isIntersecting) {
      if(ent.target.classList.contains('reveal-el')) {
        ent.target.classList.add('in-view');
      } else if(ent.target.classList.contains('reveal-words')) {
        ent.target.classList.add('in-view');
        const words = ent.target.querySelectorAll('.word-inner');
        words.forEach((w,i) => w.style.transitionDelay = `${i*35}ms`);
      } else if(ent.target.classList.contains('reveal-lines') && ent.target.id !== 'heroH1') {
        ent.target.classList.add('ready');
        const lines = ent.target.querySelectorAll('.line-inner');
        const base = parseInt(ent.target.dataset.delay||0);
        const stagger = parseInt(ent.target.dataset.stagger||120);
        lines.forEach((l,i) => l.style.transitionDelay = `${base + i*stagger}ms`);
      }
      observer.unobserve(ent.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-el, .reveal-words, .reveal-lines:not(#heroH1)').forEach(el => observer.observe(el));

// Stats count-up
let statsTriggered = false;
const statsPanel = document.querySelector('.stats-panel');
const statNums = document.querySelectorAll('.stat-num');
function updateStats() {
  if(!statsPanel) return;
  const rect = statsPanel.getBoundingClientRect();
  const top = rect.top, h = rect.height, wh = window.innerHeight;
  // start: top bottom (top = wh). end: center center (top+h/2 = wh/2)
  const startY = wh;
  const endY = wh/2 - h/2;
  let prog = (startY - top) / (startY - endY);
  prog = Math.max(0, Math.min(1, prog));
  statNums.forEach(n => {
    const t = parseInt(n.dataset.val);
    n.textContent = Math.round(prog * t);
  });
}
window.addEventListener('scroll', updateStats, {passive:true});

// Loader
stopScroll();
const fill = document.getElementById('loaderFill');
const count = document.getElementById('loaderCount');
const loader = document.getElementById('loader');
const startT = performance.now();
const fillMs = 1300;
function easeInOutCubic(x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
function loaderTick() {
  const t = Math.min((performance.now() - startT)/fillMs, 1);
  const e = easeInOutCubic(t);
  const p = Math.round(e*100);
  fill.style.width = p + '%';
  count.textContent = p.toString().padStart(3,'0');
  if(t < 1) requestAnimationFrame(loaderTick);
  else {
    setTimeout(() => {
      loader.style.transform = 'translateY(-100%)';
      document.getElementById('loaderContent').style.opacity = '0';
      document.getElementById('loaderContent').style.transform = 'translateY(-12px)';
      setTimeout(() => {
        isReady = true;
        startScroll();
        loader.remove();
        // trigger hero reveals
        document.getElementById('header').classList.add('ready');
        setTimeout(() => document.getElementById('heroEyebrow').classList.add('ready'), 200);
        setTimeout(() => {
          const h1 = document.getElementById('heroH1');
          h1.classList.add('ready');
          h1.querySelectorAll('.line-inner').forEach((l,i) => l.style.transitionDelay = `${i*120}ms`);
        }, 250);
        setTimeout(() => document.getElementById('watermark').classList.add('ready'), 300);
        setTimeout(() => document.getElementById('heroCard').classList.add('ready'), 400);
        setTimeout(() => document.getElementById('heroPartners').classList.add('ready'), 550);
        setTimeout(() => document.getElementById('heroRating').classList.add('ready'), 650);
        setTimeout(() => document.getElementById('heroCtas').classList.add('ready'), 750);
        setTimeout(() => document.getElementById('heroStatus').classList.add('ready'), 900);
      }, 700);
    }, 200);
  }
}
requestAnimationFrame(loaderTick);

// Carousel
let cardIdx = 0;
const slots = document.querySelectorAll('.hero-card-slot-item');
const dots = document.querySelectorAll('.hcc-dot');
function updateCard(dir) {
  const old = cardIdx;
  cardIdx = (cardIdx + dir + 3) % 3;
  slots.forEach((s,i) => {
    s.className = 'hero-card-slot-item ' + (i===cardIdx ? 'active' : (i===old ? (dir>0?'prev':'next') : (dir>0?'next':'prev')));
  });
  dots.forEach((d,i) => d.className = 'hcc-dot ' + (i===cardIdx ? 'active' : 'inactive'));
}
window.nextCard = () => updateCard(1);
window.prevCard = () => updateCard(-1);

// Nav Menu
const navOverlay = document.getElementById('navMenu');
const navItems = document.querySelectorAll('.nav-item');
window.openMenu = () => {
  stopScroll();
  navOverlay.classList.add('open');
  navItems.forEach((n,i) => n.style.transitionDelay = `${i*45 + 80}ms`);
  document.addEventListener('keydown', menuKey);
}
window.closeMenu = () => {
  startScroll();
  navOverlay.classList.remove('open');
  navItems.forEach((n) => n.style.transitionDelay = '0ms');
  document.removeEventListener('keydown', menuKey);
}
function menuKey(e) { if(e.key === 'Escape') closeMenu(); }

// Modal
const modal = document.getElementById('reqModal');
const formWrap = document.getElementById('modalFormWrap');
const successWrap = document.getElementById('modalSuccess');
const reqForm = document.getElementById('reqForm');
window.openModal = () => {
  if(window.innerWidth >= 640) closeMenu(); // if open
  stopScroll();
  modal.classList.add('open');
  document.addEventListener('keydown', modalKey);
}
window.closeModal = (e) => {
  if(e && e.target !== modal && !e.target.closest('.modal-close') && !e.target.classList.contains('pill-btn')) return;
  startScroll();
  modal.classList.remove('open');
  document.removeEventListener('keydown', modalKey);
  setTimeout(() => {
    formWrap.style.display = 'block';
    successWrap.style.display = 'none';
    reqForm.reset();
    document.getElementById('submitBtnTxt').textContent = 'Send request';
  }, 300);
}
function modalKey(e) { if(e.key === 'Escape') closeModal(); }
reqForm.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('submitBtnTxt').textContent = 'Sending...';
  setTimeout(() => {
    formWrap.style.display = 'none';
    successWrap.style.display = 'flex';
  }, 600);
});

// Liquid Reveal
const canvas = document.getElementById('liquidCanvas');
const ctx = canvas.getContext('2d', {willReadFrequently: true});
const coverImg = new Image();
coverImg.crossOrigin = 'anonymous';
coverImg.src = 'https://api.getlayers.ai/storage/v1/object/public/public/assets/lumora-e8b711fc68/hero/before.jpg';
let dpr = Math.min(window.devicePixelRatio||1, 2);
let cw = 0, ch = 0;
const brushRad = 143;
const decay = 0.016;
let offCover = document.createElement('canvas'), offCtx = offCover.getContext('2d');
let offBrush = document.createElement('canvas'), brushCtx = offBrush.getContext('2d');
let points = [];
let drawing = false;
let idleFrames = 0;

function resizeCanvas() {
  const rect = document.getElementById('liquidBg').getBoundingClientRect();
  cw = rect.width; ch = rect.height;
  canvas.width = cw * dpr; canvas.height = ch * dpr;
  offCover.width = cw * dpr; offCover.height = ch * dpr;
  if(coverImg.complete && coverImg.naturalWidth) drawCover();
  
  const r = brushRad * dpr;
  const diam = Math.ceil(r*2);
  offBrush.width = diam; offBrush.height = diam;
}
function drawCover() {
  const iw = coverImg.naturalWidth, ih = coverImg.naturalHeight;
  const scale = Math.max((cw*dpr)/iw, (ch*dpr)/ih);
  const sw = iw*scale, sh = ih*scale;
  offCtx.drawImage(coverImg, (cw*dpr - sw)/2, (ch*dpr - sh)/2, sw, sh);
}
coverImg.onload = drawCover;
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let lastP = null;
window.addEventListener('pointermove', e => {
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX - rect.left) * dpr;
  const y = (e.clientY - rect.top) * dpr;
  const r = brushRad * dpr;
  if(x < -r || x > (cw*dpr+r) || y < -r || y > (ch*dpr+r)) { lastP = null; drawing = false; return; }
  drawing = true;
  if(!lastP) lastP = {x,y};
  const dist = Math.hypot(x-lastP.x, y-lastP.y);
  const step = Math.max(r*0.3, 1);
  const n = Math.min(Math.ceil(dist/step), 60);
  for(let i=1; i<=n; i++) {
    points.push({ x: lastP.x + (x-lastP.x)*(i/n), y: lastP.y + (y-lastP.y)*(i/n) });
  }
  lastP = {x,y};
});

function drawLiquid() {
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(points.length) idleFrames = 0;
  else {
    idleFrames++;
    if(idleFrames > 120) { ctx.clearRect(0,0,cw*dpr,ch*dpr); requestAnimationFrame(drawLiquid); return; }
  }
  
  const fade = drawing ? decay : Math.min(decay + idleFrames*0.004, 0.5);
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = `rgba(0,0,0,${fade})`;
  ctx.fillRect(0,0,cw*dpr,ch*dpr);
  
  if(points.length > 0) {
    const r = brushRad * dpr;
    const diam = Math.ceil(r*2);
    
    points.forEach(p => {
      brushCtx.clearRect(0,0,diam,diam);
      brushCtx.globalCompositeOperation = 'source-over';
      const grad = brushCtx.createRadialGradient(r,r,0, r,r,r);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.55, 'rgba(255,255,255,.82)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      brushCtx.fillStyle = grad;
      brushCtx.fillRect(0,0,diam,diam);
      
      brushCtx.globalCompositeOperation = 'source-in';
      brushCtx.drawImage(offCover, p.x-r, p.y-r, diam, diam, 0, 0, diam, diam);
      
      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(offBrush, p.x-r, p.y-r);
    });
    points = [];
  }
  requestAnimationFrame(drawLiquid);
}
requestAnimationFrame(drawLiquid);
drawing = false;
</script>

    </div>
  );
}
