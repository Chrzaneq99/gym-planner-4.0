const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

function findJsFiles(dir) {
  const res = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const p = path.join(dir, it.name);
    if (it.isDirectory()) {
      res.push(...findJsFiles(p));
    } else if (it.isFile() && p.endsWith('.js')) {
      res.push(p);
    }
  }
  return res;
}

const root = path.resolve(__dirname, '..');
const files = findJsFiles(root).filter(p => !p.includes('node_modules'));
let hadError = false;
for (const f of files) {
  try {
    const src = fs.readFileSync(f, 'utf8');
    acorn.parse(src, { ecmaVersion: 2020, sourceType: 'module' });
    console.log(`OK: ${path.relative(root, f)}`);
  } catch (err) {
    hadError = true;
    console.error(`ERROR in ${path.relative(root, f)}:`);
    console.error(err.message);
  }
}
if (hadError) process.exit(2);
else process.exit(0);
