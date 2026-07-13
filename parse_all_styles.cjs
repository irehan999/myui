const fs = require('fs');
const html = fs.readFileSync('public/templates/myui.html', 'utf8');

const styles = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
let allStyles = '';
for (const s of styles) {
  allStyles += s.replace(/<style[^>]*>([\s\S]*?)<\/style>/, '$1') + '\n';
}

fs.writeFileSync('src/registry/components/lumora/styles.ts', 'export const styles = `' + allStyles.replace(/`/g, '\\`').replace(/\$/g, '\\$') + '`;');
console.log('Done extracting ALL styles!');
