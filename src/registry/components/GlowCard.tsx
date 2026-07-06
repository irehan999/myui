import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function GlowCard() {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-64 w-80 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 40%)`,
        }}
      />
      <div className="z-10 flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 shadow-inner">
          <Sparkles className="h-5 w-5 text-indigo-400" />
        </div>
        <div>
          <h3 className="mb-2 font-display text-xl font-semibold tracking-tight text-zinc-100">
            Interactive Glow
          </h3>
          <p className="text-sm text-zinc-400">
            Hover over this card to reveal a subtle, spotlight glow effect that follows your cursor precisely.
          </p>
        </div>
      </div>
    </div>
  );
}
