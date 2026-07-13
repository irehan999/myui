const fs = require('fs');
const styles = fs.readFileSync('src/registry/components/lumora/styles.ts', 'utf8');
const match = styles.match(/nav-item:hover/);
console.log(match ? "Found nav-item hover" : "NOT FOUND nav-item hover");
