const fs = require('fs');

const files = [
  'src/registry/components/lumora/Header.tsx',
  'src/registry/components/lumora/Hero.tsx',
  'src/registry/components/lumora/About.tsx',
  'src/registry/components/lumora/Footer.tsx',
  'src/registry/components/lumora/Overlays.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let code = fs.readFileSync(file, 'utf8');
    
    // Replace eval(...) with window calls
    code = code.replace(/try\s*\{\s*eval\("([^"]+)"\)\s*\}\s*catch\(e\)\{\}/g, (match, fn) => {
      let result = '';
      if (fn.includes('event.stopPropagation()')) {
        result += 'event.stopPropagation(); ';
        fn = fn.replace(/event\.stopPropagation\(\);\s*/, '');
      }
      
      if (fn === 'openModal()') {
        result += 'if ((window as any).openModal) (window as any).openModal();';
      } else if (fn === 'closeModal()') {
        result += 'if ((window as any).closeModal) (window as any).closeModal();';
      } else if (fn === 'openMenu()') {
        result += 'if ((window as any).openMenu) (window as any).openMenu();';
      } else if (fn === 'closeMenu()') {
        result += 'if ((window as any).closeMenu) (window as any).closeMenu();';
      } else if (fn === 'nextCard()') {
        result += 'if ((window as any).nextCard) (window as any).nextCard();';
      } else if (fn === 'prevCard()') {
        result += 'if ((window as any).prevCard) (window as any).prevCard();';
      } else if (fn.startsWith("scrollToId('")) {
        const id = fn.match(/scrollToId\('([^']+)'\)/)[1];
        result += `if ((window as any).scrollToId) (window as any).scrollToId('${id}');`;
      } else {
        result += fn; // fallback
      }
      
      return result;
    });
    
    fs.writeFileSync(file, code);
  }
}
console.log('Fixed evals');
