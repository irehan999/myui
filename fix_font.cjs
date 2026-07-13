const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap');\n`;
if (!css.includes('Onest')) {
  fs.writeFileSync('src/index.css', fontImport + css);
}
