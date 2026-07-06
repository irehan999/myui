import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function PremiumButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center gap-2 overflow-hidden rounded-full bg-zinc-50 px-6 py-3 font-medium text-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-colors hover:bg-white"
    >
      <span className="relative z-10 flex items-center gap-2">
        Explore Components
        <motion.span
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </span>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{
          translateX: isHovered ? ['-100%', '200%'] : '-100%',
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: isHovered ? Infinity : 0,
          repeatDelay: 0.5
        }}
      />
    </motion.button>
  );
}
