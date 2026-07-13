import React from 'react';

// Import components
import PremiumButton from './components/PremiumButton';
import GlowCard from './components/GlowCard';
import HeroSection from './components/HeroSection';
import MyUITemplate from './components/MyUITemplate';
import SaaSDashboard from './components/SaaSDashboard';

// Use Vite's ?raw feature to get the actual source code of the components
// This allows us to serve the exact code that runs
import premiumButtonCode from './components/PremiumButton.tsx?raw';
import glowCardCode from './components/GlowCard.tsx?raw';
import heroSectionCode from './components/HeroSection.tsx?raw';
import myUITemplateCode from '../../public/templates/myui.html?raw';
import saasDashboardCode from './components/SaaSDashboard.tsx?raw';

import lumoraReactAppCode from './components/lumora/App.tsx?raw';
import lumoraReactLoaderCode from './components/lumora/Loader.tsx?raw';
import lumoraReactScriptCode from './components/lumora/useLumoraScript.ts?raw';
import lumoraReactHeaderCode from './components/lumora/Header.tsx?raw';
import lumoraReactHeroCode from './components/lumora/Hero.tsx?raw';
import lumoraReactAboutCode from './components/lumora/About.tsx?raw';
import lumoraReactPortfolioCode from './components/lumora/Portfolio.tsx?raw';
import lumoraReactServicesCode from './components/lumora/Services.tsx?raw';
import lumoraReactOverlaysCode from './components/lumora/Overlays.tsx?raw';
import lumoraReactStylesCode from './components/lumora/styles.ts?raw';
import lumoraReactFooterCode from './components/lumora/Footer.tsx?raw';
import LumoraReactApp from './components/lumora/App';

import SodaHero from './components/soda/Soda';
import sodaHeroCode from './components/soda/Soda.tsx?raw';
import sodaHeroCssCode from './components/soda/Soda.css?raw';

import SereneApp from './components/serene/Serene';
import sereneAppCode from './components/serene/Serene.tsx?raw';
import sereneHeroCode from './components/serene/Hero.tsx?raw';
import sereneQuoteCode from './components/serene/QuoteSection.tsx?raw';

export interface RegistryFile {
  name: string;
  content: string;
}

export interface RegistryItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  dependencies: string[];
  usageInstructions: string;
  component: React.ComponentType;
  rawCode: string;
  usageCode?: string;
  files?: RegistryFile[];
  thumbnailSrc?: string;
}

export const componentsRegistry: RegistryItem[] = [
  {
    id: 'serene',
    slug: 'serene',
    title: 'Serene Beauty & Wellness',
    description: 'A highly polished full-screen landing page with 3D parallax effects and a liquid glass mobile menu. Uses Instrument Serif and GSAP-like requestAnimationFrame animations.',
    category: 'Templates',
    dependencies: [],
    usageInstructions: 'This is a multi-file component. Copy all three files into your project.',
    component: SereneApp,
    rawCode: sereneAppCode,
    files: [
      { name: 'Serene.tsx', content: sereneAppCode },
      { name: 'Hero.tsx', content: sereneHeroCode },
      { name: 'QuoteSection.tsx', content: sereneQuoteCode }
    ]
  },
  {
    id: 'soda',
    slug: 'soda',
    title: 'Soda Landing Page',
    description: 'A full-viewport hero landing page for a fictional "Diet Soda" beverage featuring 3D models and GSAP animations.',
    category: 'Templates',
    dependencies: ['gsap', '@google/model-viewer'],
    usageInstructions: 'npm install gsap @google/model-viewer',
    component: SodaHero,
    rawCode: sodaHeroCode,
    files: [
      { name: 'Soda.tsx', content: sodaHeroCode },
      { name: 'Soda.css', content: sodaHeroCssCode }
    ]
  },
  {
    id: 'lumora-react',
    slug: 'lumora-react',
    title: 'Lumora React Template',
    description: 'A multi-component React version of the Lumora template using TSX, Tailwind, and Motion for modern reactive UI architecture.',
    category: 'Templates',
    dependencies: ['motion', 'lucide-react'],
    usageInstructions: 'Download the ZIP to get the complete folder structure. Run `npm i motion lucide-react` then assemble the components.',
    component: LumoraReactApp,
    rawCode: lumoraReactAppCode,
    files: [
      { name: 'App.tsx', content: lumoraReactAppCode },
      { name: 'styles.ts', content: lumoraReactStylesCode },
      { name: 'components/Header.tsx', content: lumoraReactHeaderCode },
      { name: 'components/Loader.tsx', content: lumoraReactLoaderCode },
      { name: 'components/useLumoraScript.ts', content: lumoraReactScriptCode },
      { name: 'components/Hero.tsx', content: lumoraReactHeroCode },
      { name: 'components/About.tsx', content: lumoraReactAboutCode },
      { name: 'components/Portfolio.tsx', content: lumoraReactPortfolioCode },
      { name: 'components/Services.tsx', content: lumoraReactServicesCode },
      { name: 'components/Footer.tsx', content: lumoraReactFooterCode },
      { name: 'components/Overlays.tsx', content: lumoraReactOverlaysCode },
    ]
  },
  {
    id: 'saas-dashboard',
    slug: 'saas-dashboard',
    title: 'SaaS Architecture',
    description: 'A multi-component dashboard architecture with sidebars, layouts, and data views. Demonstrates downloading multi-file templates.',
    category: 'Templates',
    dependencies: ['lucide-react'],
    usageInstructions: 'This template is structured across multiple files.\n\nDownload the ZIP to get the complete folder structure, or view the individual files in the code tab.',
    component: SaaSDashboard,
    rawCode: saasDashboardCode,
    files: [
      { name: 'App.tsx', content: `import DashboardLayout from './layout';\nimport DashboardPage from './page';\n\nexport default function App() {\n  return (\n    <DashboardLayout>\n      <DashboardPage />\n    </DashboardLayout>\n  );\n}` },
      { name: 'layout.tsx', content: `import Sidebar from './components/Sidebar';\n\nexport default function DashboardLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <div className="flex h-screen w-full bg-[#050505] text-[#e0e0e0] font-sans overflow-hidden">\n      <Sidebar />\n      <div className="flex-1 flex flex-col">\n        {children}\n      </div>\n    </div>\n  );\n}` },
      { name: 'components/Sidebar.tsx', content: `import { LayoutDashboard, Users, Settings, Activity } from 'lucide-react';\n\nexport default function Sidebar() {\n  return (\n    <div className="w-64 border-r border-white/10 bg-[#0a0a0a] flex flex-col">\n      <div className="h-16 flex items-center px-6 border-b border-white/10">\n        <div className="font-bold text-lg text-white">Acme Inc.</div>\n      </div>\n      <nav className="flex-1 p-4 space-y-1">\n        <a href="#" className="flex items-center gap-3 px-3 py-2 bg-indigo-500/10 text-indigo-400 rounded-md text-sm font-medium">\n          <LayoutDashboard className="w-4 h-4" /> Dashboard\n        </a>\n        {/* ... */}\n      </nav>\n    </div>\n  );\n}` },
      { name: 'page.tsx', content: `export default function DashboardPage() {\n  return (\n    <>\n      <header className="h-16 border-b border-white/10 bg-[#0a0a0a] flex items-center px-8 justify-between">\n        <h2 className="text-lg font-medium text-white">Overview</h2>\n      </header>\n      <main className="flex-1 p-8 overflow-auto">\n        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">\n          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">\n            <div className="text-sm text-white/50 mb-2">Total Revenue</div>\n            <div className="text-2xl font-bold text-white">$45,231.89</div>\n          </div>\n        </div>\n      </main>\n    </>\n  );\n}` }
    ]
  },
  {
    id: 'myui',
    slug: 'myui',
    title: 'Lumora Studio Template',
    description: 'A full-page HTML template for an independent design & engineering studio. Includes complex custom liquid canvas reveals, smooth scrolling, and adaptive grids.',
    category: 'Templates',
    dependencies: [],
    usageInstructions: 'This is a pure HTML/CSS/JS template.\n\nSave the provided source code into an `index.html` file and serve it with any static file server.',
    component: MyUITemplate,
    rawCode: myUITemplateCode,
    usageCode: `<!-- This is a complete HTML document. -->
<!-- Copy the Component Source into an index.html file to use. -->
<!-- No build step required. -->`,
    files: [
      { name: 'index.html', content: myUITemplateCode },
      { name: 'README.md', content: `# Lumora Studio Template\n\nA beautiful single-file HTML template. Just open \`index.html\` in your browser or serve it with any static web server.\n\nAll styling, animations, and scripts are self-contained.` }
    ]
  },
  {
    id: 'hero-section',
    slug: 'hero-section',
    title: 'Immersive Hero Section',
    description: 'A full-width hero section with gradient orbs, staggered text animations, and sleek call-to-action buttons.',
    category: 'Sections',
    dependencies: ['motion', 'lucide-react'],
    usageInstructions: 'npm install motion lucide-react\n\nUse this at the very top of your landing page.',
    component: HeroSection,
    rawCode: heroSectionCode,
    usageCode: `import HeroSection from './components/HeroSection';

export default function LandingPage() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans">
      <HeroSection />
      {/* other sections */}
    </div>
  );
}`
  },
  {
    id: 'premium-button',
    slug: 'premium-button',
    title: 'Premium Button',
    description: 'A highly polished button with a subtle hover shine and spring animations.',
    category: 'Buttons',
    dependencies: ['motion', 'lucide-react'],
    usageInstructions: 'npm install motion lucide-react\n\nCopy the component into your project and use it anywhere.',
    component: PremiumButton,
    rawCode: premiumButtonCode,
    usageCode: `import PremiumButton from './components/PremiumButton';

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950">
      <PremiumButton />
    </div>
  );
}`
  },
  {
    id: 'glow-card',
    slug: 'glow-card',
    title: 'Spotlight Glow Card',
    description: 'An interactive card with a gradient glow effect that tracks the cursor.',
    category: 'Cards',
    dependencies: ['motion', 'lucide-react'],
    usageInstructions: 'npm install motion lucide-react\n\nDrop this component into a grid layout to create an elegant feature section.',
    component: GlowCard,
    rawCode: glowCardCode,
    usageCode: `import GlowCard from './components/GlowCard';

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlowCard />
        <GlowCard />
        <GlowCard />
      </div>
    </div>
  );
}`
  }
];
