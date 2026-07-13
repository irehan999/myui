import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const IMAGES = [
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png', bg: '#F4845F', panel: '#F79B7F' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png', bg: '#6BBF7A', panel: '#85CC92' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png', bg: '#E882B4', panel: '#ED9DC4' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png', bg: '#6EB5FF', panel: '#8DC4FF' },
];

export default function Toonhub() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    IMAGES.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });

    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);

    setActiveIndex((prev) => {
      if (direction === 'next') return (prev + 1) % 4;
      return (prev + 3) % 4;
    });

    setTimeout(() => setIsAnimating(false), 650);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) navigate('next');
      else navigate('prev');
    }
    touchStartX.current = null;
  };

  const getRole = (index: number) => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + 3) % 4) return 'left';
    if (index === (activeIndex + 1) % 4) return 'right';
    return 'back';
  };

  const getStylesForRole = (role: string) => {
    const baseTransition = 'transform 650ms cubic-bezier(0.4, 0, 0.2, 1), filter 650ms cubic-bezier(0.4, 0, 0.2, 1), opacity 650ms cubic-bezier(0.4, 0, 0.2, 1), left 650ms cubic-bezier(0.4, 0, 0.2, 1)';
    const willChange = 'transform, filter, opacity, left';

    switch (role) {
      case 'center':
        return {
          transform: `translateX(-50%) scale(${isMobile ? 1.25 : isTablet ? 1.4 : 1.68})`,
          filter: 'blur(0px)',
          opacity: 1,
          zIndex: 20,
          left: '50%',
          height: isMobile ? '60%' : isTablet ? '75%' : '92%',
          bottom: isMobile ? '22%' : isTablet ? '10%' : '0',
          transition: baseTransition,
          willChange
        };
      case 'left':
        return {
          transform: 'translateX(-50%) scale(1)',
          filter: 'blur(2px)',
          opacity: 0.85,
          zIndex: 10,
          left: isMobile ? '20%' : isTablet ? '25%' : '30%',
          height: isMobile ? '16%' : isTablet ? '22%' : '28%',
          bottom: isMobile ? '32%' : isTablet ? '22%' : '12%',
          transition: baseTransition,
          willChange
        };
      case 'right':
        return {
          transform: 'translateX(-50%) scale(1)',
          filter: 'blur(2px)',
          opacity: 0.85,
          zIndex: 10,
          left: isMobile ? '80%' : isTablet ? '75%' : '70%',
          height: isMobile ? '16%' : isTablet ? '22%' : '28%',
          bottom: isMobile ? '32%' : isTablet ? '22%' : '12%',
          transition: baseTransition,
          willChange
        };
      case 'back':
        return {
          transform: 'translateX(-50%) scale(1)',
          filter: 'blur(4px)',
          opacity: 1,
          zIndex: 5,
          left: '50%',
          height: isMobile ? '13%' : isTablet ? '18%' : '22%',
          bottom: isMobile ? '32%' : isTablet ? '22%' : '12%',
          transition: baseTransition,
          willChange
        };
      default:
        return {};
    }
  };

  const fractalNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;

  return (
    <div
      style={{
        backgroundColor: IMAGES[activeIndex].bg,
        transition: 'background-color 650ms cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Inter', sans-serif",
      }}
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full" style={{ height: '100vh', overflow: 'hidden' }}>
        
        {/* Grain Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            zIndex: 50, 
            opacity: 0.4, 
            backgroundImage: fractalNoise, 
            backgroundSize: '200px 200px', 
            backgroundRepeat: 'repeat' 
          }} 
        />

        {/* Giant Ghost Text */}
        <div 
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none px-4"
          style={{ zIndex: 2, top: isMobile ? '25%' : isTablet ? '20%' : '18%' }}
        >
          <span 
            className="text-white whitespace-nowrap uppercase"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(50px, 22vw, 300px)',
              fontWeight: 900,
              opacity: 1,
              lineHeight: 1,
              letterSpacing: '-0.02em'
            }}
          >
            3D SHAPE
          </span>
        </div>

        {/* Brand Label */}
        <div 
          className="absolute top-6 left-6 md:top-8 md:left-10 uppercase text-white font-semibold text-xs md:text-sm"
          style={{ zIndex: 60, opacity: 0.9, letterSpacing: '0.18em' }}
        >
          TOONHUB
        </div>

        {/* Carousel */}
        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          {IMAGES.map((item, index) => {
            const role = getRole(index);
            const style = getStylesForRole(role);
            return (
              <div 
                key={index} 
                className="absolute"
                style={{ ...style, aspectRatio: '0.6 / 1' }}
              >
                <img 
                  src={item.src} 
                  alt={`Character ${index + 1}`}
                  draggable="false"
                  referrerPolicy="no-referrer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom-left Text & Nav */}
        <div 
          className="absolute bottom-8 left-6 md:bottom-12 md:left-10 lg:bottom-16 lg:left-16"
          style={{ zIndex: 60, maxWidth: isMobile ? '260px' : isTablet ? '320px' : '380px' }}
        >
          <p 
            className="font-bold uppercase text-white mb-2 md:mb-3 text-sm md:text-lg lg:text-[22px]"
            style={{ opacity: 0.95, letterSpacing: '0.02em' }}
          >
            TOONHUB FIGURINES
          </p>
          <p 
            className="hidden md:block text-white text-xs lg:text-sm mb-4 lg:mb-5"
            style={{ opacity: 0.85, lineHeight: 1.6 }}
          >
            The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.
          </p>
          <div className="flex items-center gap-3 lg:gap-4 mt-4 md:mt-0">
            <button 
              onClick={() => navigate('prev')}
              className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white flex items-center justify-center bg-transparent group overflow-hidden"
              style={{ transition: 'transform 150ms, background-color 150ms' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ArrowLeft className="text-white w-5 h-5 lg:w-[26px] lg:h-[26px]" strokeWidth={2.25} />
            </button>
            <button 
              onClick={() => navigate('next')}
              className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-white flex items-center justify-center bg-transparent group overflow-hidden"
              style={{ transition: 'transform 150ms, background-color 150ms' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ArrowRight className="text-white w-5 h-5 lg:w-[26px] lg:h-[26px]" strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* Bottom-right Link */}
        <a 
          href="#"
          className="absolute bottom-8 right-6 md:bottom-12 md:right-10 lg:bottom-16 lg:right-16 flex items-center uppercase text-white hover:opacity-100 transition-opacity duration-200"
          style={{ 
            zIndex: 60, 
            opacity: 0.95,
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(18px, 3.5vw, 48px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            textDecoration: 'none'
          }}
        >
          DISCOVER IT
          <ArrowRight className="ml-2 md:ml-3 lg:ml-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" strokeWidth={2.25} />
        </a>

      </div>
    </div>
  );
}
