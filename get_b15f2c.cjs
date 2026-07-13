const fs = require('fs');
const html = fs.readFileSync('public/templates/myui.html', 'utf8');
const match = html.match(/<style>([\s\S]*?)<\/style>/);
if (match) {
  const css = match[1];
  const lines = css.split('\n');
  lines.forEach(line => {
    if (line.includes('hover') || line.includes('b15f2c')) console.log(line);
  });
}
