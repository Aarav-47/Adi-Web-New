const fs = require('fs');
const path = require('path');

const targets = [
  'node_modules/schema-utils/node_modules/ajv-keywords',
  'node_modules/ajv-keywords',
];

targets.forEach(t => {
  const dir = path.join(__dirname, t, 'node_modules', 'ajv');
  const src = path.join(__dirname, 'node_modules', 'ajv');
  if (!fs.existsSync(dir) && fs.existsSync(src)) {
    fs.mkdirSync(dir, { recursive: true });
    fs.cpSync(src, dir, { recursive: true });
    console.log('Patched', t);
  }
});
