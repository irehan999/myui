import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { componentsRegistry } from '../registry/registry';
import { LayoutGrid, Layers, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Explorer() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(componentsRegistry.map(item => item.category)))];
  
  const filteredComponents = activeCategory === 'All' 
    ? componentsRegistry 
    : componentsRegistry.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#e0e0e0] font-sans overflow-hidden">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-400 shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">UI Foundry<span className="text-indigo-400">.live</span></span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-white/60">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">v1.4.2</span>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">Self-Hosted</span>
            </div>
            <div className="hidden sm:block h-4 w-[1px] bg-white/20"></div>
            <div className="flex gap-4 items-center">
              <div className="relative group hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 transition-colors group-focus-within:text-indigo-400" />
                <input 
                  type="text" 
                  placeholder="Search registry..." 
                  className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-indigo-500/50 text-white placeholder:text-white/30"
                />
              </div>
              <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200">New Component</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Premium React Components
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/50">
              Beautifully crafted components ready to be copy-pasted into your apps. 
              Built with modern React, Framer Motion, and Tailwind CSS.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all",
                  activeCategory === category
                    ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredComponents.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={item.id}
                >
                  <Link 
                    to={`/components/${item.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    {/* Preview Thumbnail Area */}
                    <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/5 bg-[#050505] p-6">
                      <div className="absolute inset-0 opacity-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] transition-opacity group-hover:opacity-100" />
                      
                      <div className="absolute inset-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity bg-[#050505]">
                        <iframe src={`/preview/${item.slug}`} className="w-full h-full border-none overflow-hidden" tabIndex={-1} />
                      </div>
                    </div>
                    
                    {/* Info Area */}
                    <div className="flex flex-1 flex-col justify-between gap-2 p-5">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg text-white">{item.title}</h3>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-400 uppercase tracking-tighter">
                            {item.category}
                          </span>
                        </div>
                        <p className="line-clamp-2 text-xs text-white/40">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
