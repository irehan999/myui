const fs = require('fs');
const html = fs.readFileSync('public/templates/myui.html', 'utf8');
const match = html.match(/<style>([\s\S]*?)<\/style>/);
if (match) {
  const css = match[1];
  const rules = css.split('}');
  rules.forEach(rule => {
    if (rule.includes('hover') || rule.includes('b15f2c')) {
      console.log(rule.trim() + '}');
    }
  });
}
