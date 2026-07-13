const fs = require('fs');
let code = fs.readFileSync('src/registry/components/lumora/useLumoraScript.ts', 'utf8');
code = code.replace(/\\\$/g, '$');
fs.writeFileSync('src/registry/components/lumora/useLumoraScript.ts', code);
