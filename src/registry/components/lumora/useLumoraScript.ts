// @ts-nocheck
import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLumoraScript() {
  useEffect(() => {
    let unmounted = false;
    
    // We wrap everything in a timeout to ensure DOM is fully painted
    const initTimer = setTimeout(() => {
      try {



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


      } catch (e) {
        console.error("Lumora script error:", e);
      }
    }, 100);
    
    return () => {
      unmounted = true;
      clearTimeout(initTimer);
      // clean up window variables
      delete (window as any).scrollToId;
      delete (window as any).nextCard;
      delete (window as any).prevCard;
      delete (window as any).openMenu;
      delete (window as any).closeMenu;
      delete (window as any).openModal;
      delete (window as any).closeModal;
    };
  }, []);
}
