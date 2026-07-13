import React from 'react';

export default function Loader() {
  return (
    <>
      <div id="loader" className="loader">
  <div className="loader-content" id="loaderContent">
    <div className="loader-logo-row">
      <svg viewBox="0 0 48 48"><path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" /></svg>
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
    </>
  );
}
