import fs from 'fs/promises';

const buffer = await fs.readFile('file-system.mjs');

console.log(buffer.toString());

fs.writeFile('text.txt', 'Hello');
