import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Gradients */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px]"></div>
        <div className="w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] absolute bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-medium text-white/80">Introducing AI-Powered Components</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Build stunning <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">interfaces</span> at lightspeed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-white/50 mb-10 max-w-2xl"
        >
          A premium collection of React components built with Framer Motion and Tailwind CSS. 
          Ready to be copied directly into your next big project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors">
            Start Building
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
            View Documentation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
