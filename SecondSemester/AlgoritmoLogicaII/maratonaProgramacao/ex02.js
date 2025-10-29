var input = "7\n8\n10\n8\n260\n4\n10\n10";
var lines = input.split(/\s+/);

let leitura = lines[0];
let dados = []
let unico = new Set()
let arrayUnico = []

for ( let i = 1; i <= leitura; i++){
    dados.push(lines[i])
    unico.add(lines[i])
}

arrayUnico = [...unico]

arrayUnico.sort((a, b) => a - b)

let contagem = []
for( let i = 0; i < arrayUnico.length; i++){
    let count = 0
    for(let j = 0; j < dados.length; j++){
        if(arrayUnico[i] === dados[j]){
            count++
        }
    }
    contagem.push(count)
}

for ( let i = 0; i < contagem.length; i++){
    console.log(`${arrayUnico[i]} aparece ${contagem[i]} vez(es)`);
}
