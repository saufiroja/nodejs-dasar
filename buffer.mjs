const buffer1 = Buffer.from('Muhammad Saufi Roja');

// console.log(buffer1);
// console.log(buffer1.toString());

// encoding
const buffer2 = Buffer.from('Muhammad Saufi Roja', 'utf-8');
console.log(buffer2.toString());
console.log(buffer2.toString('hex'));
console.log(buffer2.toString('base64'));

const name = Buffer.from('TXVoYW1tYWQgU2F1ZmkgUm9qYQ==', 'base64');
console.log(name.toString('utf-8'));
