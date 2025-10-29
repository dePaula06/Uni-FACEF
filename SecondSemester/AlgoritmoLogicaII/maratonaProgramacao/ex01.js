var input = "2 3";
var lines = input.split(/\s+/);

let table = {
    '1': 4,
    '2': 4.5,
    '3': 5,
    '4': 2,
    '5': 1.5
}

let code = parseInt(lines[0])
let qtd = parseInt(lines[1])

console.log(`Total R$ ${table[code] * qtd}`);
