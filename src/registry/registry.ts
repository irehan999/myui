import React from 'react';

// Import components
import PremiumButton from './components/PremiumButton';
import GlowCard from './components/GlowCard';
import HeroSection from './components/HeroSection';
import MyUITemplate from './components/MyUITemplate';

// Use Vite's ?raw feature to get the actual source code of the components
// This allows us to serve the exact code that runs
import premiumButtonCode from './components/PremiumButton.tsx?raw';
import glowCardCode from './components/GlowCard.tsx?raw';
import heroSectionCode from './components/HeroSection.tsx?raw';
import myUITemplateCode from '../../public/templates/myui.html?raw';

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
}

export const componentsRegistry: RegistryItem[] = [
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
<!-- No build step required. -->`
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
