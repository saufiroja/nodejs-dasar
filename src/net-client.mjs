import net from 'net';

const connection = net.createConnection({
  port: 3000,
  host: 'localhost',
});

connection.addListener('data', (data) => {
  console.log(`Receive data from server ${data.toString()}`);
});

setInterval(() => {
  connection.write(`Eko  `);
}, 2000);
