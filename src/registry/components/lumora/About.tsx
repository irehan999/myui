import React from 'react';

export default function About() {
  return (
    <>
      <section id="about" className="section-about">
    <div className="shell about-grid">
      <div className="about-left">
        <svg className="about-globe" viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" fill="none"><circle cx="12" cy="12" r="9.25" /><path d="M12 2.75c2.6 2.3 4 5.8 4 9.25s-1.4 6.95-4 9.25c-2.6-2.3-4-5.8-4-9.25s1.4-6.95 4-9.25zM2.75 12h18.5" /></svg>
        <div className="eyebrow dark" style={{"opacity":"1","transform":"none"}}><div className="eyebrow-dot"></div> The Studio</div>
        <div className="about-statement-box reveal-el">
          <svg viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" fill="none"><circle cx="12" cy="12" r="9.25" /><path d="M12 2.75c2.6 2.3 4 5.8 4 9.25s-1.4 6.95-4 9.25c-2.6-2.3-4-5.8-4-9.25s1.4-6.95 4-9.25zM2.75 12h18.5" /></svg>
          <span style={{"maxWidth":"14rem"}}>A distributed team building across every time zone.</span>
        </div>
      </div>
      <div className="about-right">
        <h2 className="about-h2 reveal-words">We partner with ambitious teams to ship <span style={{"color":"#8d8d8d"}}>digital products, brand systems, and the strategy that holds them together.</span></h2>
        <div className="about-footer reveal-el" style={{"transitionDelay":"200ms"}}>
          <div>
            <div style={{"fontSize":".875rem","color":"rgba(17,17,17,.45)"}}>Find us online</div>
            <div className="social-chips">
              <a href="#" className="social-chip sc-x" aria-label="X"><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"><path d="M4 4l16 16M4 20l16-16" /></svg></a>
              <a href="#" className="social-chip sc-other" aria-label="Behance"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="3.2" /></svg></a>
              <a href="#" className="social-chip sc-other" aria-label="Dribbble"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="3.2" /></svg></a>
            </div>
          </div>
          <button className="pill-btn">
            <span className="pill-inner pill-outline pill-py-arrow">
              About Us
              <span className="pill-badge"><svg className="right" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
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
      <li className="band-li reveal-el" style={{"transitionDelay":"240ms"}}><div className="band-tile bt-3"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div></li>
      <li className="band-li reveal-el" style={{"transitionDelay":"360ms"}}><div className="band-tile bt-4">Better</div></li>
    </ul>
  </section>
    </>
  );
}
