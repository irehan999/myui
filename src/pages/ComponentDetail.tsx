import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { componentsRegistry } from '../registry/registry';
import { ArrowLeft, Check, Copy, Download, ExternalLink, Code2, Play, Package, Terminal, Monitor, Smartphone } from 'lucide-react';
import JSZip from 'jszip';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '../lib/utils';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('bash', bash);

type Tab = 'preview' | 'code' | 'installation';

export default function ComponentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<Tab>('preview');
  const [codeView, setCodeView] = useState<'source' | 'usage'>('source');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isCopiedDep, setIsCopiedDep] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const componentItem = componentsRegistry.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!componentItem) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6 text-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-white mb-2">Component Not Found</h1>
          <p className="text-zinc-400 mb-6">The component you're looking for doesn't exist.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Explorer
          </Link>
        </div>
      </div>
    );
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleCopyDep = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopiedDep(true);
    setTimeout(() => setIsCopiedDep(false), 2000);
  };

  const handleDownloadZip = async () => {
    setIsDownloading(true);
    try {
      const zip = new JSZip();
      
      const folderName = componentItem.title.replace(/\s+/g, '');
      const folder = zip.folder(folderName);
      if (!folder) return;

      if (componentItem.files && componentItem.files.length > 0) {
        componentItem.files.forEach(f => {
          folder.file(f.name, f.content);
        });
      } else {
        folder.file(`${folderName}.tsx`, componentItem.rawCode);
      }
      
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `${componentItem.slug}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate zip:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#e0e0e0] font-sans">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-400 shadow-[0_0_15px_rgba(79,70,229,0.5)]">
            <Package className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">UI Foundry<span className="text-indigo-400">.live</span></span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-white/60">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">v1.4.2</span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">Self-Hosted</span>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col bg-[#050505]">
        {/* Component Header */}
        <header className="p-8 flex items-end justify-between max-w-7xl mx-auto w-full">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-400 uppercase tracking-tighter">{componentItem.category}</span>
              <span className="text-white/20 text-xs">/</span>
              <span className="text-white/40 text-xs font-mono">components/ui/{componentItem.slug}.tsx</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{componentItem.title}</h2>
            <p className="text-sm text-white/50 max-w-lg">{componentItem.description}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDownloadZip}
              disabled={isDownloading}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10 transition-colors disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              {isDownloading ? 'Zipping...' : 'Download ZIP'}
            </button>
            <button
              onClick={() => handleCopy(componentItem.rawCode)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-colors"
            >
              {isCopied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
              {isCopied ? 'Copied' : 'Copy Source'}
            </button>
          </div>
        </header>

        {/* Tabs Section */}
        <div className="px-8 flex-1 flex flex-col max-w-7xl mx-auto w-full pb-12">
          <div className="flex border-b border-white/5">
            <button onClick={() => setActiveTab('preview')} className={cn("px-6 py-3 text-xs font-semibold transition-colors", activeTab === 'preview' ? "text-white border-b-2 border-indigo-500" : "text-white/40 hover:text-white")}>Preview</button>
            <button onClick={() => setActiveTab('code')} className={cn("px-6 py-3 text-xs font-semibold transition-colors", activeTab === 'code' ? "text-white border-b-2 border-indigo-500" : "text-white/40 hover:text-white")}>Code</button>
            <button onClick={() => setActiveTab('installation')} className={cn("px-6 py-3 text-xs font-semibold transition-colors", activeTab === 'installation' ? "text-white border-b-2 border-indigo-500" : "text-white/40 hover:text-white")}>Installation</button>
          </div>

          <div className="flex-1 p-6 relative mt-4 min-h-[500px]">
            {/* Glow Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <div className="w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[120px]"></div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'preview' && (
                <motion.div 
                  key="preview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute inset-x-6 inset-y-6 flex flex-col z-10"
                >
                  <div className="w-full h-full rounded-xl border border-white/10 bg-black/40 overflow-hidden flex flex-col shadow-2xl backdrop-blur-sm relative">
                    <div className="h-10 bg-zinc-900 border-b border-white/5 flex items-center justify-between px-4 z-20 relative shrink-0">
                      <div className="flex items-center gap-1.5 w-1/3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20"></div>
                      </div>
                      
                      <div className="flex items-center justify-center gap-1 bg-[#050505] rounded-md p-1 border border-white/5 w-1/3 max-w-[120px]">
                         <button onClick={() => setPreviewMode('desktop')} className={cn("p-1.5 rounded transition-colors", previewMode === 'desktop' ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white")}><Monitor className="w-3.5 h-3.5" /></button>
                         <button onClick={() => setPreviewMode('mobile')} className={cn("p-1.5 rounded transition-colors", previewMode === 'mobile' ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white")}><Smartphone className="w-3.5 h-3.5" /></button>
                      </div>

                      <div className="flex items-center justify-end gap-2 w-1/3">
                        <a 
                          href={`/preview/${componentItem.slug}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white/20 hover:text-white transition-colors flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest"
                        >
                          Open <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                    {!iframeLoaded && (
                      <div className="absolute inset-0 top-10 flex items-center justify-center bg-black/40 z-10">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-400/80">Rendering Component</span>
                        </div>
                      </div>
                    )}
                    <div className={cn("flex-1 bg-[#0a0a0a] overflow-auto flex items-start justify-center transition-all", previewMode === 'mobile' ? "py-8" : "")}>
                      <iframe 
                        src={`/preview/${componentItem.slug}`} 
                        className={cn("border-none bg-transparent relative z-0 transition-all duration-500 origin-top", previewMode === 'mobile' ? "w-[375px] h-[812px] border border-white/10 rounded-3xl shadow-2xl ring-4 ring-white/5" : "w-full h-full")}
                        title={`${componentItem.title} Preview`}
                        onLoad={() => setIframeLoaded(true)}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'code' && (
                <motion.div 
                  key="code"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute inset-x-6 inset-y-6 flex flex-col z-10"
                >
                  <div className="w-full h-full rounded-xl border border-white/10 bg-black/40 overflow-hidden flex flex-col shadow-2xl backdrop-blur-sm">
                    {componentItem.usageCode && !componentItem.files && (
                      <div className="h-10 bg-[#0a0a0a] border-b border-white/5 flex items-center px-2 gap-2 shrink-0">
                        <button onClick={() => setCodeView('source')} className={cn("px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-md transition-colors", codeView === 'source' ? "bg-white/10 text-white" : "text-white/40 hover:text-white hover:bg-white/5")}>Component Source</button>
                        <button onClick={() => setCodeView('usage')} className={cn("px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded-md transition-colors", codeView === 'usage' ? "bg-white/10 text-white" : "text-white/40 hover:text-white hover:bg-white/5")}>Usage Example</button>
                      </div>
                    )}
                    <div className="h-8 bg-zinc-900 border-b border-white/5 flex items-center justify-between px-4 shrink-0">
                      <div className="text-[10px] font-mono text-white/40">
                        {componentItem.files ? componentItem.files[activeFileIndex]?.name : (codeView === 'source' ? `${componentItem.title.replace(/\s+/g, '')}.tsx` : 'App.tsx')}
                      </div>
                      <button onClick={() => handleCopy(componentItem.files ? componentItem.files[activeFileIndex].content : (codeView === 'source' ? componentItem.rawCode : componentItem.usageCode!))} className="text-white/40 hover:text-white transition-colors">
                        {isCopied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                    <div className="flex-1 overflow-hidden flex">
                      {componentItem.files && componentItem.files.length > 0 && (
                        <div className="w-48 border-r border-white/5 bg-[#080808] flex flex-col py-2 overflow-y-auto shrink-0">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 px-4 mb-2 mt-2">Files</span>
                          {componentItem.files.map((f, i) => (
                            <button 
                              key={f.name}
                              onClick={() => setActiveFileIndex(i)}
                              className={cn("text-left px-4 py-2 text-xs font-mono truncate transition-colors", activeFileIndex === i ? "bg-white/10 text-white" : "text-white/40 hover:bg-white/5 hover:text-white")}
                            >
                              {f.name}
                            </button>
                          ))}
                        </div>
                      )}
                      <div className="flex-1 overflow-auto bg-[#080808]">
                        <SyntaxHighlighter
                          language={componentItem.files ? (componentItem.files[activeFileIndex]?.name.endsWith('.html') ? 'html' : componentItem.files[activeFileIndex]?.name.endsWith('.md') ? 'markdown' : 'tsx') : 'tsx'}
                          style={vscDarkPlus}
                          customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent', fontSize: '0.875rem' }}
                        >
                          {componentItem.files ? componentItem.files[activeFileIndex]?.content : (codeView === 'source' ? componentItem.rawCode : componentItem.usageCode!)}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'installation' && (
                 <motion.div 
                   key="installation"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="absolute inset-x-6 inset-y-6 flex flex-col z-10 overflow-auto"
                 >
                   <div className="w-full min-h-full rounded-xl border border-white/10 bg-black/40 overflow-hidden flex flex-col shadow-2xl backdrop-blur-sm p-8">
                     <div className="max-w-2xl">
                       <h3 className="mb-4 text-sm font-bold tracking-widest uppercase text-white/30">Dependencies</h3>
                       {componentItem.dependencies.length > 0 ? (
                         <div className="mb-8 overflow-hidden rounded-lg border border-white/10 bg-[#080808]">
                           <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-2">
                             <span className="text-[10px] font-mono text-white/40">Terminal</span>
                             <button onClick={() => handleCopyDep(`npm install ${componentItem.dependencies.join(' ')}`)} className="text-white/40 hover:text-white transition-colors">
                               {isCopiedDep ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                             </button>
                           </div>
                           <SyntaxHighlighter
                             language="bash"
                             style={vscDarkPlus}
                             customStyle={{ margin: 0, padding: '1rem', background: 'transparent', fontSize: '0.875rem' }}
                           >
                             {`npm install ${componentItem.dependencies.join(' ')}`}
                           </SyntaxHighlighter>
                         </div>
                       ) : (
                         <p className="mb-8 text-white/40 text-sm">No external dependencies required.</p>
                       )}

                       <h3 className="mb-4 text-sm font-bold tracking-widest uppercase text-white/30">Setup Instructions</h3>
                       <div className="prose prose-invert max-w-none">
                         <p className="text-white/50 text-sm whitespace-pre-line leading-relaxed">
                           {componentItem.usageInstructions}
                         </p>
                       </div>
                     </div>
                   </div>
                 </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Footer info area */}
          <div className="h-24 py-4 flex gap-8 items-center border-t border-white/5 mt-8">
            <div>
              <span className="block text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Required Deps</span>
              <div className="flex gap-2">
                {componentItem.dependencies.length > 0 ? componentItem.dependencies.map(dep => (
                  <span key={dep} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md font-mono text-white/60">{dep}</span>
                )) : <span className="text-xs text-white/40">None</span>}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
