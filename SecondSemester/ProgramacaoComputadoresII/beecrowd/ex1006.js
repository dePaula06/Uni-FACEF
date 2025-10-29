var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a, b, c

a = parseFloat(lines[0] * 2)
b = parseFloat(lines[1] * 3)
c = parseFloat(lines[2] * 5)

let media

media = (a + b + c) / 10

console.log(`MEDIA = ${media.toFixed(1)}`);
