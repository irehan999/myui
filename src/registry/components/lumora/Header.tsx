import React from 'react';

export default function Header() {
  return (
    <>
      <header id="header" className="header">
  <div className="shell">
    <button className="brand-btn" onClick={() => { if ((window as any).scrollToId) (window as any).scrollToId('home'); }}>
      <svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></svg>
      Lumora
    </button>
    <nav>
      <ul className="nav-links">
        <li><button onClick={() => { if ((window as any).scrollToId) (window as any).scrollToId('home'); }} aria-current="page">Home</button></li>
        <li><button onClick={() => { if ((window as any).scrollToId) (window as any).scrollToId('works'); }}>Work</button></li>
        <li><button onClick={() => { if ((window as any).scrollToId) (window as any).scrollToId('services'); }}>Services <span style={{"fontSize":".75rem","opacity":".6"}}>▾</span></button></li>
        <li><button onClick={() => { if ((window as any).scrollToId) (window as any).scrollToId('about'); }}>Studio</button></li>
        <li><button onClick={() => { if ((window as any).scrollToId) (window as any).scrollToId('careers'); }}>Careers</button></li>
        <li><button onClick={() => { if ((window as any).openModal) (window as any).openModal(); }}>Contact</button></li>
      </ul>
    </nav>
    <div className="header-right">
      <div className="clock-chip">
        <span style={{"color":"rgba(17,17,17,.45)"}}>Local time</span>
        <span style={{"minWidth":"3.5rem","fontVariantNumeric":"tabular-nums","fontWeight":"500","color":"#111"}} id="liveTime">9:41am</span>
        <span style={{"color":"rgba(17,17,17,.3)"}}>•</span>
        <span style={{"fontWeight":"500"}} id="liveDate">12 March, 2025</span>
      </div>
      <button className="menu-btn" onClick={() => { if ((window as any).openMenu) (window as any).openMenu(); }}>
        <span className="menu-btn-inner">
          <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span className="menu-txt">Menu</span>
        </span>
      </button>
    </div>
  </div>
</header>
    </>
  );
}
