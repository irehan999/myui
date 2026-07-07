import React from 'react';

export default function Services() {
  return (
    <>
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
            <div className="srv-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></div>
          </a>
        </li>
        <li className="srv-li reveal-el" style={{"transitionDelay":"80ms"}}>
          <a href="#" className="srv-row">
            <span className="srv-idx">02</span>
            <h3 className="srv-h3">Product Design</h3>
            <p className="srv-desc">Interfaces that feel effortless and look sharp.</p>
            <div className="srv-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></div>
          </a>
        </li>
        <li className="srv-li reveal-el" style={{"transitionDelay":"160ms"}}>
          <a href="#" className="srv-row">
            <span className="srv-idx">03</span>
            <h3 className="srv-h3">Quality Assurance</h3>
            <p className="srv-desc">Rigorous testing for flawless, confident releases.</p>
            <div className="srv-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></div>
          </a>
        </li>
        <li className="srv-li reveal-el" style={{"transitionDelay":"240ms"}}>
          <a href="#" className="srv-row">
            <span className="srv-idx">04</span>
            <h3 className="srv-h3">Consulting</h3>
            <p className="srv-desc">Strategy and direction for ambitious teams.</p>
            <div className="srv-badge"><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></div>
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
    </>
  );
}
