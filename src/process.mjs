import process from 'process';

console.log(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);
