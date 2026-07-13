const fs = require('fs');
const html = fs.readFileSync('public/templates/myui.html', 'utf8');
const match = html.match(/<style>([\s\S]*?)<\/style>/);
if (match) {
  const css = match[1];
  console.log(css.substring(0, 500));
}
