const fs = require('fs');
const code = fs.readFileSync('src/registry/components/lumora/useLumoraScript.ts', 'utf8');
const match = code.match(/setTimeout\(\(\) => \{\n\s*(.*?)\n/);
if (match) console.log(code.substring(match.index, match.index + 500));
