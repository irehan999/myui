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
    
    // Replace onClick={() => { event.stopPropagation();
    // with onClick={(event) => { event.stopPropagation();
    code = code.replace(/onClick=\{\(\)\s*=>\s*\{\s*event\.stopPropagation\(\)/g, 'onClick={(event) => { event.stopPropagation()');
    
    fs.writeFileSync(file, code);
  }
}
console.log('Fixed event arg');
