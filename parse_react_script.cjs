const fs = require('fs');
const html = fs.readFileSync('public/templates/myui.html', 'utf8');

const scripts = html.match(/<script[^>]*>([\s\S]*?)<\/script>/g) || [];
let scriptBody = '';
for (const s of scripts) {
  const content = s.replace(/<script[^>]*>([\s\S]*?)<\/script>/, '$1');
  if (content.length > 50 && !content.includes('"imports"')) { 
    scriptBody += content + '\n';
  }
}

// Remove the import from the body
scriptBody = scriptBody.replace(/import\s+Lenis\s+from\s+['"][^'"]+['"];/, "");

// Wrap in useEffect
const hookCode = `// @ts-nocheck
import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLumoraScript() {
  useEffect(() => {
    let unmounted = false;
    
    // We wrap everything in a timeout to ensure DOM is fully painted
    const initTimer = setTimeout(() => {
      try {
${scriptBody}
      } catch (e) {
        console.error("Lumora script error:", e);
      }
    }, 100);
    
    return () => {
      unmounted = true;
      clearTimeout(initTimer);
      // clean up window variables
      delete (window as any).scrollToId;
      delete (window as any).nextCard;
      delete (window as any).prevCard;
      delete (window as any).openMenu;
      delete (window as any).closeMenu;
      delete (window as any).openModal;
      delete (window as any).closeModal;
    };
  }, []);
}
`;

fs.writeFileSync('src/registry/components/lumora/useLumoraScript.ts', hookCode);
console.log('Fixed script hook correctly!');
