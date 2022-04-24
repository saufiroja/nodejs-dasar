import dns from 'dns/promises';

const address = await dns.lookup('www.muhammad-saufi-roja-f1326a.netlify.app');

console.log(address.address);
console.log(address.family);
