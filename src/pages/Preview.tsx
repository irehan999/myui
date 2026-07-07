import React from 'react';
import { useParams } from 'react-router-dom';
import { componentsRegistry } from '../registry/registry';

export default function Preview() {
  const { slug } = useParams<{ slug: string }>();
  const componentItem = componentsRegistry.find(c => c.slug === slug);

  // If not found in iframe, just show nothing or a tiny error
  if (!componentItem) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-zinc-950 font-mono text-xs text-red-400">
        404 - Component not found
      </div>
    );
  }

  const Component = componentItem.component;
  const isFullPage = ['Sections', 'Pages', 'Templates'].includes(componentItem.category);

  return (
    <div className={`flex min-h-screen w-full bg-[#050505] text-[#e0e0e0] font-sans antialiased ${isFullPage ? '' : 'items-center justify-center p-8'}`}>
      <div className={`relative ${isFullPage ? 'w-full h-screen' : ''}`}>
        <Component />
      </div>
    </div>
  );
}
