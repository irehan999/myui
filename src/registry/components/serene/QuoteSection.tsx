import React, { useEffect, useRef } from 'react';

const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reqRef = useRef<number>();
  
  // Ref to hold current lerped values to avoid react state updates per frame
  const animatedValues = useRef({
    rainbowY: 120,
    leftCloudX: -200,
    rightCloudX: 200,
    cloudOpacity: 0,
    cloudY: 0
  });
  
  const rainbowRef = useRef<HTMLImageElement>(null);
  const leftCloudRef = useRef<HTMLImageElement>(null);
  const rightCloudRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateAnimations = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Progress 0 to 1
      const rawProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      
      // Target values
      const targetRainbowY = 120 - (progress * 280); // 120 to -160
      
      let targetLeftCloudX = -200;
      let targetRightCloudX = 200;
      let targetCloudOpacity = 0;
      
      if (progress >= 0.12 && progress <= 0.92) {
        // Cloud visible phase
        targetLeftCloudX = 0;
        targetRightCloudX = 0;
        targetCloudOpacity = 1;
      }
      
      const targetCloudY = progress * -50;
      
      // Lerp
      animatedValues.current.rainbowY = lerp(animatedValues.current.rainbowY, targetRainbowY, 0.06);
      animatedValues.current.leftCloudX = lerp(animatedValues.current.leftCloudX, targetLeftCloudX, 0.04);
      animatedValues.current.rightCloudX = lerp(animatedValues.current.rightCloudX, targetRightCloudX, 0.04);
      animatedValues.current.cloudOpacity = lerp(animatedValues.current.cloudOpacity, targetCloudOpacity, 0.04);
      animatedValues.current.cloudY = lerp(animatedValues.current.cloudY, targetCloudY, 0.04);
      
      // Apply transforms
      if (rainbowRef.current) {
        rainbowRef.current.style.transform = `translate3d(0, ${animatedValues.current.rainbowY}px, 0)`;
      }
      
      if (leftCloudRef.current) {
        leftCloudRef.current.style.transform = `translate3d(${animatedValues.current.leftCloudX}px, ${animatedValues.current.cloudY}px, 0)`;
        leftCloudRef.current.style.opacity = animatedValues.current.cloudOpacity.toString();
      }
      
      if (rightCloudRef.current) {
        rightCloudRef.current.style.transform = `translate3d(${animatedValues.current.rightCloudX}px, ${animatedValues.current.cloudY}px, 0) scaleX(-1)`;
        rightCloudRef.current.style.opacity = animatedValues.current.cloudOpacity.toString();
      }
      
      reqRef.current = requestAnimationFrame(updateAnimations);
    };
    
    reqRef.current = requestAnimationFrame(updateAnimations);
    
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center px-6 md:px-12"
      style={{
        background: 'linear-gradient(180deg, #010A17 0%, #0A4267 30%, #20658E 60%, #6BADC4 100%)'
      }}
    >
      {/* Rainbow */}
      <img 
        ref={rainbowRef}
        src="https://soft-zoom-63098134.figma.site/_assets/v11/8d520a7515d06cbfc403d0125e3d05b1a7ccd29c.png"
        alt="Rainbow overlay"
        className="absolute inset-x-0 top-0 z-30 w-full h-[150vh] object-cover mix-blend-overlay"
        style={{ willChange: 'transform' }}
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      
      {/* Left Cloud */}
      <img 
        ref={leftCloudRef}
        src="https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png"
        alt="Cloud"
        className="absolute left-0 bottom-[10%] z-10 hidden sm:block w-[500px] md:w-[650px] pointer-events-none"
        style={{ marginLeft: '-250px', opacity: 0, willChange: 'transform, opacity' }}
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      
      {/* Right Cloud */}
      <img 
        ref={rightCloudRef}
        src="https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png"
        alt="Cloud"
        className="absolute right-0 bottom-[15%] z-10 w-[500px] md:w-[650px] pointer-events-none"
        style={{ marginRight: '-250px', transform: 'scaleX(-1)', opacity: 0, willChange: 'transform, opacity' }}
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />

      {/* Quote Content */}
      <div className="relative z-20 w-full max-w-4xl text-center flex flex-col items-center px-4">
        <h2 className="font-instrument text-white text-[6vw] sm:text-2xl md:text-4xl lg:text-[42px] leading-[1.3] md:leading-[1.5]">
          &ldquo;Serene was founded on a belief in beauty that honors your nature. We pursue refined outcomes, considered approaches, and lasting vitality. We spend time learning what matters to you before deciding what serves you best. No rushing, no excess &mdash; just support that lets you feel radiant.&rdquo;
        </h2>
        <p className="mt-6 md:mt-8 text-white/80 text-xs sm:text-sm md:text-base tracking-wide">
          Dr. Mia Callahan &mdash; Founder
        </p>
      </div>
    </section>
  );
}
