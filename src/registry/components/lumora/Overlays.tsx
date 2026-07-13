import React from 'react';

export default function Overlays() {
  return (
    <>
      <div id="navMenu" className="nav-overlay">
  <div className="shell nav-top">
    <div className="loader-logo-row" style={{"fontSize":"1.125rem"}}><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></svg> Lumora</div>
    <button className="nav-close" onClick={() => { if ((window as any).closeMenu) (window as any).closeMenu(); }}><svg viewBox="0 0 24 24"><path d="M4 4l16 16M4 20l16-16" /></svg> Close</button>
  </div>
  <div className="shell nav-mid">
    <ul className="nav-list" id="navList">
      <li><button className="nav-item" onClick={() => { closeMenu(); scrollToId('home') }}><span className="nav-idx">01</span><span className="nav-lbl">Home</span></button></li>
      <li><button className="nav-item" onClick={() => { closeMenu(); scrollToId('works') }}><span className="nav-idx">02</span><span className="nav-lbl">Work</span></button></li>
      <li><button className="nav-item" onClick={() => { closeMenu(); scrollToId('services') }}><span className="nav-idx">03</span><span className="nav-lbl">Services</span></button></li>
      <li><button className="nav-item" onClick={() => { closeMenu(); scrollToId('about') }}><span className="nav-idx">04</span><span className="nav-lbl">Studio</span></button></li>
      <li><button className="nav-item" onClick={() => { closeMenu(); scrollToId('careers') }}><span className="nav-idx">05</span><span className="nav-lbl">Careers</span></button></li>
      <li><button className="nav-item" onClick={() => { closeMenu(); setTimeout(openModal, 100) }}><span className="nav-idx">06</span><span className="nav-lbl">Contact</span></button></li>
    </ul>
  </div>
  <div className="shell nav-bot">
    <span>Local time — <span id="navTime">9:41am</span></span>
    <button className="nav-start" onClick={() => { closeMenu(); setTimeout(openModal, 100) }}>Start a project →</button>
  </div>
</div>
<div id="reqModal" className="modal-backdrop" onClick={() => { closeModal(event) }} role="dialog" aria-modal="true">
  <div className="modal-panel" onClick={(event) => { event.stopPropagation(); event.stopPropagation() }}>
    <button className="modal-close" onClick={() => { if ((window as any).closeModal) (window as any).closeModal(); }}><svg viewBox="0 0 24 24"><path d="M4 4l16 16M4 20l16-16" /></svg></button>
    <div id="modalFormWrap">
      <div style={{"marginBottom":"1.5rem","display":"flex","flexDirection":"column","gap":".375rem"}}>
        <div className="eyebrow dark"><div className="eyebrow-dot" style={{"background":"#b15f2c"}}></div> Start a project</div>
        <h2 className="modal-h2">Tell us what you're building.</h2>
      </div>
      <form className="modal-form" id="reqForm">
        <label><span className="modal-label">Name</span><input className="modal-input" type="text" required="" placeholder="Your name" /></label>
        <label><span className="modal-label">Email</span><input className="modal-input" type="email" required="" placeholder="you@company.com" /></label>
        <label><span className="modal-label">Project</span><textarea className="modal-input" rows="4" required="" style={{"resize":"none"}} placeholder="A few words about your project, timeline, and budget."></textarea></label>
        <div className="modal-bot">
          <span className="modal-note">We reply within one business day.</span>
          <button className="pill-btn" type="submit">
            <span className="pill-inner pill-dark pill-py-arrow">
              <span id="submitBtnTxt">Send request</span>
              <span className="pill-badge"><svg className="up-right" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></span>
            </span>
          </button>
        </div>
      </form>
    </div>
    <div id="modalSuccess" className="modal-success">
      <div className="badge"><svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></svg></div>
      <h2>Request received</h2>
      <p>Thanks for reaching out — we'll get back to you within one business day.</p>
      <button className="pill-btn" onClick={() => { if ((window as any).closeModal) (window as any).closeModal(); }}>
        <span className="pill-inner pill-dark pill-py-noarrow">Close</span>
      </button>
    </div>
  </div>
</div>
    </>
  );
}
