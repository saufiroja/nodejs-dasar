/*
debugger run : node inspect namafile
command: {
    c       : continue eksekusi
    n       : step next
    s       : step in
    o       : step out
    pause   : Pause running code
}
*/

function sayHello(name) {
  debugger;
  return `hello ${name}`;
}

const name = 'oja';
debugger;
console.log(sayHello(name));
