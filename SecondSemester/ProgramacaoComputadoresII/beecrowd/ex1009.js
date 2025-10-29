var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numeroPeca1, numeroPeca2, valorUnitario1, valorUnitario2, valorTotal

numeroPeca1 = parseInt(lines[0][1])
valorUnitario1 = parseFloat(lines[0][2])
numeroPeca2 = parseInt(lines[1][1])
valorUnitario2 = parseFloat(lines[1][2])

valorTotal = (numeroPeca1 * valorUnitario1) + (numeroPeca2 * valorUnitario2)

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);
