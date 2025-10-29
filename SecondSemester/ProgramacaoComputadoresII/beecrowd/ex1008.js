var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numberFuncionario, horasTrabalhadas, valorHora, salario

numberFuncionario = parseInt(lines[0])
horasTrabalhadas = parseInt(lines[1])
valorHora = parseFloat(lines[2])

salario = horasTrabalhadas * valorHora

console.log(`NUMBER = ${numberFuncionario}\nSALARY = U\\$ ${salario.toFixed(2)}`);
