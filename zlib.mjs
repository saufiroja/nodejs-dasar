import zlib from 'zlib';
import fs from 'fs';

// compress
const src = fs.readFileSync('zlib.mjs');
const result = zlib.gzipSync(src);
console.log(result.toString());

fs.writeFileSync('zlib.mjs.txt', result);

// decompress
const source = fs.readFileSync('zlib.mjs.txt');
const res = zlib.unzipSync(source);

console.log(res.toString());
