var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a, b, c, d, diferenca

a = parseInt(lines[0])
b = parseInt(lines[1])
c = parseInt(lines[2])
d = parseInt(lines[3])

diferenca = ( (  a * b ) - ( c * d))

console.log(`DIFERENCA = ${diferenca}`);