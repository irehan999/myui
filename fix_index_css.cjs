const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
// Remove body and scrollbar styles
css = css.replace(/body\s*\{[\s\S]*?\}/g, '');
css = css.replace(/::-webkit-scrollbar[^{]*\{[\s\S]*?\}/g, '');
// Let's just reset index.css entirely for this specific route if we could, but we'll just clean it up.
fs.writeFileSync('src/index.css', css);
