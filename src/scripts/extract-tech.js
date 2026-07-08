const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../../content/Internal Pages');
const uniqueTech = new Set();

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDirectory(fullPath);
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const stackMatch = content.match(/## 6\. TECH STACK & TOOLS[\s\S]*?### Stack([\s\S]*?)(?:\r?\n##|$)/);
      if (stackMatch) {
        const lines = stackMatch[1].split('\n');
        for (const line of lines) {
          const match = line.trim().match(/^-\s+\*\*([^*]+):\*\*\s*(.*)$/);
          if (match) {
            const items = match[2].split(/,\s*(?![^()]*\))/).map(s => s.trim().replace(/---/g, '').trim()).filter(Boolean);
            items.forEach(t => uniqueTech.add(t));
          }
        }
      }
    }
  }
}

scanDirectory(baseDir);
console.log(JSON.stringify(Array.from(uniqueTech).sort(), null, 2));
