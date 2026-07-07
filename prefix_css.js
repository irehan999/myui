const fs = require('fs');

let css = fs.readFileSync('src/registry/components/lumora/styles.css', 'utf8');

// Replace body with .lumora-theme
css = css.replace(/body\s*\{/g, '.lumora-theme {');
// Replace html with .lumora-theme
css = css.replace(/html\s*\{/g, '.lumora-theme {');
// Prefix all rules with .lumora-theme
css = css.replace(/(?:^|\})\s*([^{]+)\s*\{/g, (match, p1) => {
  if (match.startsWith('}')) {
    return `}\n.lumora-theme ${p1.trim()} {`;
  }
  return `.lumora-theme ${p1.trim()} {`;
});

// Fix at rules like @media
css = css.replace(/\.lumora-theme\s+@media/g, '@media');
css = css.replace(/@media[^{]+\{\s*\.lumora-theme/g, match => {
  return match; // it's okay inside media queries it can be .lumora-theme
});

// A simpler way: we just scope everything using Less or Sass? We don't have it.
// Let's just do a simpler CSS replace for body and html since the app has its own styles
// The main issue is the `body` background.
