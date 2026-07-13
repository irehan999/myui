// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '@google/model-viewer';
import './Soda.css';

const ASSET_BASE_URL = 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d';
const LEAVES_GLB = `${ASSET_BASE_URL}/leaves.glb`;
const CHERRY_GLB = `${ASSET_BASE_URL}/cherry.glb`;
const BLUEBERRY_GLB = `${ASSET_BASE_URL}/blueberry.glb`;
const DEIT_SODA2_GLB = `${ASSET_BASE_URL}/deit_soda2.glb`;
const GREEN_SODA_PNG = `${ASSET_BASE_URL}/Green%20Soda.png`;
const BLUE_SODA_PNG = `${ASSET_BASE_URL}/Blue%20Soda.png`;
const GREEN_BASE_COLOR_JPG = `${ASSET_BASE_URL}/green%20base%20color.jpg`;
const BLUE_BASE_COLOR_JPG = `${ASSET_BASE_URL}/blue%20base%20color.jpg`;
const BUBBLE_PNG = `${ASSET_BASE_URL}/bubble.png`;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

export default function SodaHero() {
  const [flavor, setFlavor] = useState<'classic' | 'blue'>('classic');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const modelViewerRef = useRef<any>(null);
  const berriesFGRef = useRef<HTMLDivElement>(null);
  const berriesBGRef = useRef<HTMLDivElement>(null);
  const leavesBGRef = useRef<HTMLDivElement>(null);
  const heroCenterRef = useRef<HTMLDivElement>(null);
  const bubblesContainerRef = useRef<HTMLDivElement>(null);

  const [isSwitching, setIsSwitching] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  
  const switchSpinRef = useRef(0);
  const blueTextureRef = useRef<any>(null);
  const greenTextureRef = useRef<any>(null);

  // Load textures
  useEffect(() => {
    const initTextures = async () => {
      const modelViewer = modelViewerRef.current;
      if (!modelViewer) return;
      
      const handleLoad = async () => {
        setIsModelLoaded(true);
        try {
          blueTextureRef.current = await modelViewer.createTexture(BLUE_BASE_COLOR_JPG);
          greenTextureRef.current = await modelViewer.createTexture(GREEN_BASE_COLOR_JPG);

          if (modelViewer.model) {
            const material = modelViewer.model.materials[0];
            if (material && material.pbrMetallicRoughness.baseColorTexture) {
              material.pbrMetallicRoughness.baseColorTexture.setTexture(blueTextureRef.current);
              await new Promise(r => requestAnimationFrame(r));
              material.pbrMetallicRoughness.baseColorTexture.setTexture(greenTextureRef.current);
            }
          }
        } catch (e) {
          console.error("Texture preload failed", e);
        }
      };

      if (modelViewer.model) {
        handleLoad();
      } else {
        modelViewer.addEventListener('load', handleLoad);
      }
      
      return () => modelViewer.removeEventListener('load', handleLoad);
    };

    initTextures();
  }, []);

  const switchFlavor = (newFlavor: 'classic' | 'blue') => {
    if (isSwitching || newFlavor === flavor) return;
    setIsSwitching(true);
    setFlavor(newFlavor);

    const body = wrapperRef.current;
    if (!body) return;
    
    const heroCenter = heroCenterRef.current;
    if (!heroCenter) return;

    const berries = body.querySelectorAll('.berry') as NodeListOf<HTMLElement>;
    const modelViewer = modelViewerRef.current;

    const targetColors = newFlavor === 'blue' ?
      { inner: '#0b4f8a', mid: '#04294e', outer: '#010c14' } :
      { inner: '#0b8a78', mid: '#044e3b', outer: '#011411' };

    gsap.to(body, {
      '--bg-inner': targetColors.inner,
      '--bg-mid': targetColors.mid,
      '--bg-outer': targetColors.outer,
      duration: 1.5,
      ease: 'power2.inOut'
    });

    const spinObj = { val: 0, blur: 0 };
    gsap.to(spinObj, {
      val: 360,
      blur: 15,
      duration: 0.6,
      ease: "power2.in",
      onUpdate: () => {
        switchSpinRef.current = spinObj.val;
        if (modelViewer) modelViewer.style.filter = `blur(${spinObj.blur}px)`;
      },
      onComplete: () => {
        if (newFlavor === 'blue') {
          body.classList.add('blue-theme');
          if (modelViewer?.model && blueTextureRef.current) {
            modelViewer.model.materials.forEach((material: any) => {
              if (material.pbrMetallicRoughness.baseColorTexture) {
                material.pbrMetallicRoughness.baseColorTexture.setTexture(blueTextureRef.current);
              }
            });
          }
        } else {
          body.classList.remove('blue-theme');
          if (modelViewer?.model && greenTextureRef.current) {
            modelViewer.model.materials.forEach((material: any) => {
              if (material.pbrMetallicRoughness.baseColorTexture) {
                material.pbrMetallicRoughness.baseColorTexture.setTexture(greenTextureRef.current);
              }
            });
          }
        }

        gsap.to(spinObj, {
          val: 720,
          blur: 0,
          duration: 1.5,
          ease: "back.out(0.7)",
          onUpdate: () => {
            switchSpinRef.current = spinObj.val;
            if (modelViewer) modelViewer.style.filter = `blur(${spinObj.blur}px)`;
          },
          onComplete: () => {
            switchSpinRef.current = 0;
            if (modelViewer) modelViewer.style.filter = 'none';
          }
        });
      }
    });

    let completedBerries = 0;
    berries.forEach((berry) => {
      const bW = berry.offsetWidth / 2;
      const bH = berry.offsetHeight / 2;
      const centerX = (window.innerWidth / 2 - berry.offsetLeft - bW);
      const centerY = (window.innerHeight / 2 - berry.offsetTop - bH);

      const startAngle = parseFloat(berry.dataset.angle || '0');
      const currentBaseX = parseFloat(berry.dataset.baseX || '0');
      const currentBaseY = parseFloat(berry.dataset.baseY || '0');

      const nextBaseX = (Math.random() - 0.5) * 200;
      const nextBaseY = (Math.random() - 0.5) * 200;

      gsap.set(berry, {
        rotation: startAngle,
        x: currentBaseX,
        y: currentBaseY
      });

      const berryTl = gsap.timeline();

      berryTl.to(berry, {
        x: centerX,
        y: centerY,
        rotation: startAngle + 45,
        scale: 0.1,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          berry.setAttribute('src', newFlavor === 'blue' ? BLUEBERRY_GLB : CHERRY_GLB);
          heroCenter.style.zIndex = '50';
        }
      })
      .to(berry, {
        duration: 0.3
      })
      .to(berry, {
        onStart: () => {
          heroCenter.style.zIndex = '1';
        },
        x: nextBaseX,
        y: nextBaseY,
        rotation: startAngle + 90,
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: "back.out(1.5)",
        onComplete: () => {
          berry.dataset.angle = (startAngle + 90).toString();
          berry.dataset.baseX = nextBaseX.toString();
          berry.dataset.baseY = nextBaseY.toString();
          berry.dataset.rx = '0';
          berry.dataset.ry = '0';

          completedBerries++;
          if (completedBerries === berries.length) {
            setIsSwitching(false);
          }
        }
      });
    });
  };

  useEffect(() => {
    if (!wrapperRef.current) return;
    const allBerries = wrapperRef.current.querySelectorAll('.berry') as NodeListOf<HTMLElement>;
    allBerries.forEach(b => {
      b.dataset.rx = '0'; 
      b.dataset.ry = '0'; 
      b.dataset.angle = (Math.random() * 360).toString();
      b.dataset.baseX = '0'; 
      b.dataset.baseY = '0';
      b.dataset.targetRx = '0'; 
      b.dataset.targetRy = '0';
    });

    let mouse = { x: 0, y: 0, px: 0, py: 0 };
    let currentMouse = { x: 0, y: 0 };
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) - 0.5;
      mouse.y = (e.clientY / window.innerHeight) - 0.5;
      mouse.px = e.clientX;
      mouse.py = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const time = Date.now() * 0.001;
      currentMouse.x += (mouse.x - currentMouse.x) * 0.05;
      currentMouse.y += (mouse.y - currentMouse.y) * 0.05;

      if (modelViewerRef.current) {
        modelViewerRef.current.cameraOrbit = `${(currentMouse.x * 40) + switchSpinRef.current}deg ${90 + (currentMouse.y * 20)}deg 380%`;
      }

      if (berriesFGRef.current) berriesFGRef.current.style.transform = `translate(${currentMouse.x * 60}px, ${currentMouse.y * 60}px)`;
      if (berriesBGRef.current) berriesBGRef.current.style.transform = `translate(${currentMouse.x * -30}px, ${currentMouse.y * -30}px)`;
      if (leavesBGRef.current) leavesBGRef.current.style.transform = `translate(${currentMouse.x * -15}px, ${currentMouse.y * -15}px)`;

      // Using the wrapper state for isSwitching would create a stale closure inside this effect,
      // so we use another ref or simply read the current DOM state, or better yet, keep isSwitching in a ref if needed.
      // But since we are directly animating DOM elements, we could check if they are currently tweening.
      // To keep it simple and match the JS, we'll check if they are switching using a mutable ref.
      
      allBerries.forEach((berry, i) => {
        // If not switching
        if (!gsap.isTweening(berry)) {
          const berryRect = berry.getBoundingClientRect();
          const berryX = berryRect.left + berryRect.width / 2;
          const berryY = berryRect.top + berryRect.height / 2;

          const diffX = mouse.px - berryX;
          const diffY = mouse.py - berryY;
          const distance = Math.sqrt(diffX * diffX + diffY * diffY);

          let targetRx = 0, targetRy = 0, speedMult = 1;

          if (distance < 400) {
            const force = (400 - distance) / 400;
            targetRx = (diffX / distance) * force * -80;
            targetRy = (diffY / distance) * force * -80;
            speedMult = 1 + force * 5;
          }

          let rx = parseFloat(berry.dataset.rx || '0');
          let ry = parseFloat(berry.dataset.ry || '0');
          let angle = parseFloat(berry.dataset.angle || '0');
          let baseX = parseFloat(berry.dataset.baseX || '0');
          let baseY = parseFloat(berry.dataset.baseY || '0');

          rx += (targetRx - rx) * 0.1;
          ry += (targetRy - ry) * 0.1;
          angle += 0.2 * speedMult;

          berry.dataset.rx = rx.toString();
          berry.dataset.ry = ry.toString();
          berry.dataset.angle = angle.toString();

          const dur = [5, 7, 6, 8, 5.5, 6.5, 9, 11, 10][i % 9];
          const phase = (time + i * 0.7) * (Math.PI * 2 / dur);
          const floatY = Math.sin(phase) * 15;
          const floatAngle = Math.cos(phase) * 6;

          berry.style.transform = `translate(calc(${rx + baseX}px), calc(${ry + baseY}px + ${floatY}px)) rotate(calc(${angle}deg + ${floatAngle}deg))`;
        }
      });

      if (wrapperRef.current) {
        const leaves = wrapperRef.current.querySelectorAll('.leaf') as NodeListOf<HTMLElement>;
        leaves.forEach((leaf, i) => {
          const dur = 10 + i * 2;
          const phase = (time + i * 1.2) * (Math.PI * 2 / dur);
          const floatY = Math.sin(phase) * 20;
          const floatX = Math.cos(phase * 0.5) * 15;
          const floatAngle = Math.sin(phase * 0.3) * 15;
          leaf.style.transform = `translate(${floatX}px, ${floatY}px) rotate(${floatAngle}deg)`;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    let bubbleInterval: any;
    
    const createBubble = () => {
      if (!bubblesContainerRef.current) return;
      const bubble = document.createElement('img');
      bubble.src = BUBBLE_PNG;
      bubble.className = 'bubble-img';
      const size = Math.random() * 20 + 10 + 'px';
      bubble.style.width = size;
      bubble.style.height = 'auto';
      bubble.style.left = Math.random() * 100 + '%';
      bubble.style.bottom = '-50px';
      bubble.style.opacity = (Math.random() * 0.4 + 0.2).toString();

      const duration = Math.random() * 6 + 4;
      bubble.style.animation = `floatUpImg ${duration}s linear forwards`;

      bubblesContainerRef.current.appendChild(bubble);
      setTimeout(() => bubble.remove(), duration * 1000);
    };
    
    bubbleInterval = setInterval(createBubble, 400);
    return () => clearInterval(bubbleInterval);
  }, []);

  return (
    <div className="soda-wrapper" ref={wrapperRef}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Inter:wght@400;500&family=Manrope:wght@400;700&family=Galada&display=swap" rel="stylesheet" />

      <div id="bubbles-container" ref={bubblesContainerRef}></div>

      <header className="soda-header">
        <div className="soda-logo">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>Soda</span>
        </div>
        <nav className="soda-nav glass">
          <a href="#" className="nav-item active">Home</a>
          <a href="#" className="nav-item">Ingredients</a>
          <a href="#" className="nav-item">Taste</a>
          <a href="#" className="nav-item">Eco</a>
          <a href="#" className="nav-item">Reviews</a>
        </nav>
        <button className="contact-btn">Contact Us</button>
      </header>

      <main className="hero">
        <div className="hero-content">
          <div className="leaves-container" ref={leavesBGRef}>
            <model-viewer loading="eager" className="leaf l1" src={LEAVES_GLB} environment-image="neutral" exposure="1.0" interaction-prompt="none" camera-orbit="45deg 75deg 105%"></model-viewer>
            <model-viewer loading="eager" className="leaf l2" src={LEAVES_GLB} environment-image="neutral" exposure="1.0" interaction-prompt="none" camera-orbit="-30deg 60deg 105%"></model-viewer>
            <model-viewer loading="eager" className="leaf l3" src={LEAVES_GLB} environment-image="neutral" exposure="1.0" interaction-prompt="none" camera-orbit="120deg 85deg 105%"></model-viewer>
            <model-viewer loading="eager" className="leaf l4" src={LEAVES_GLB} environment-image="neutral" exposure="1.0" interaction-prompt="none" camera-orbit="10deg 45deg 105%"></model-viewer>
          </div>

          <div className="hero-left">
            <h1 className="main-title large-animation-1">
              <span className="soda-text-outline">Pure</span><br />
              Zero
            </h1>
            <p className="description">
              Unleash the crisp taste of zero sugar. <br />
              Refreshment redefined in every bubble — <br />
              all in one sleek design.
            </p>
            <div className="cta-group">
              <button className="primary-btn">
                Shop Now
                <span className="plus-icon">+</span>
              </button>
            </div>
            <div className="award-badge">
              <div className="award-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L15 18L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="award-text">
                <span className="award-title">DESIGN AWARDS</span>
                <span className="award-subtitle">PREMIUM BEVERAGE 2025</span>
              </div>
            </div>
          </div>

          <div className="berries-container-bg" ref={berriesBGRef}>
            <model-viewer loading="eager" className="berry b7" src={CHERRY_GLB} environment-image="neutral" exposure="1.0" interaction-prompt="none" camera-orbit="-20deg 110deg 105%"></model-viewer>
            <model-viewer loading="eager" className="berry b8" src={CHERRY_GLB} environment-image="neutral" exposure="1.0" interaction-prompt="none" camera-orbit="160deg 45deg 105%"></model-viewer>
            <model-viewer loading="eager" className="berry b9" src={CHERRY_GLB} environment-image="neutral" exposure="1.0" interaction-prompt="none" camera-orbit="45deg 20deg 105%"></model-viewer>
          </div>

          <div className="hero-center" ref={heroCenterRef}>
            {!isModelLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50 z-10 pointer-events-none">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin mb-4"></div>
                <span className="text-xs tracking-widest uppercase font-mono">Loading 3D Assets...</span>
              </div>
            )}
            <model-viewer loading="eager" 
              ref={modelViewerRef}
              id="product-model" 
              src={DEIT_SODA2_GLB} 
              alt="Diet Soda 3D Model" 
              camera-controls
              disable-zoom 
              shadow-intensity="0" 
              environment-image="neutral" 
              exposure="1.5"
              interaction-prompt="none" 
              camera-orbit="0deg 90deg 380%" 
              field-of-view="30deg"
              className="main-product-3d"
            ></model-viewer>
          </div>

          <div className="berries-container" ref={berriesFGRef}>
            <model-viewer loading="eager" className="berry b1" src={CHERRY_GLB} environment-image="neutral" exposure="1.2" interaction-prompt="none" camera-orbit="45deg 120deg 105%"></model-viewer>
            <model-viewer loading="eager" className="berry b2" src={CHERRY_GLB} environment-image="neutral" exposure="1.2" interaction-prompt="none" camera-orbit="-120deg 45deg 105%"></model-viewer>
            <model-viewer loading="eager" className="berry b3" src={CHERRY_GLB} environment-image="neutral" exposure="1.2" interaction-prompt="none" camera-orbit="200deg 90deg 105%"></model-viewer>
            <model-viewer loading="eager" className="berry b4" src={CHERRY_GLB} environment-image="neutral" exposure="1.2" interaction-prompt="none" camera-orbit="10deg 20deg 105%"></model-viewer>
            <model-viewer loading="eager" className="berry b5" src={CHERRY_GLB} environment-image="neutral" exposure="1.2" interaction-prompt="none" camera-orbit="-45deg 160deg 105%"></model-viewer>
            <model-viewer loading="eager" className="berry b6" src={CHERRY_GLB} environment-image="neutral" exposure="1.2" interaction-prompt="none" camera-orbit="80deg 75deg 105%"></model-viewer>
          </div>

          <div className="hero-right">
            <div className="product-carousel">
              <div className="carousel-cards">
                <div 
                  className={`card ${flavor === 'classic' ? 'active' : ''}`} 
                  onClick={() => switchFlavor('classic')}
                >
                  <img src={GREEN_SODA_PNG} alt="Diet Classic" />
                  <div className="card-info">
                    <span>Diet Classic</span>
                    <span>$2.99</span>
                  </div>
                </div>
                <div 
                  className={`card ${flavor === 'blue' ? 'active' : ''}`} 
                  onClick={() => switchFlavor('blue')}
                >
                  <img src={BLUE_SODA_PNG} alt="Zero Lime" style={{ filter: 'brightness(0.7)' }} />
                  <div className="card-info">
                    <span>Zero Lime</span>
                    <span>$2.99</span>
                  </div>
                </div>
              </div>
              <div className="carousel-nav">
                <button className="nav-arrow">←</button>
                <button className="nav-arrow">→</button>
              </div>
            </div>
            <h2 className="side-title large-animation-1">
              <span className="soda-text-outline">Refreshingly</span><br />
              Clean
            </h2>
          </div>
        </div>
      </main>


      <svg style={{ position: 'absolute', width: 0, height: 0, opacity: 0, pointerEvents: 'none' }}>
        <filter id="frosted">
          <feTurbulence type="fractalNoise" baseFrequency="0.0125" numOctaves={3} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div style={{ display: 'none' }}>
        <model-viewer loading="eager" src={BLUEBERRY_GLB}></model-viewer>
        <model-viewer loading="eager" src={CHERRY_GLB}></model-viewer>
      </div>
    </div>
  );
}
