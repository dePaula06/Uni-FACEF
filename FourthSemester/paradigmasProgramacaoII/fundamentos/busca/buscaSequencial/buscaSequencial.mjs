const frutas = ['Laranja', 'Mexerica', 'Maça', 'Pera', 'Jabuticaba', 'Goiaba', 'Caqui', 'Manga', 'Mangaba', 'Limão', 'Maracuja', 'Uva', 'Morango']
const numeros = [1, 5, 9, 10, 2, 24, 15]

function buscaSequencial(vetor, valorBusca) {

    // percurso do vetor com for tradicional
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i
    }
    return -1 // valor de busca não existe no vetor
}

console.log("Buscando Bergamota:", buscaSequencial(frutas, 'Bergamota'));
console.log("Buscando o número 2:", buscaSequencial(numeros, 2));
console.log("Buscando Mangaba:", buscaSequencial(frutas, 'Mangaba'));
console.log("Buscando o número  1:", buscaSequencial(numeros, 1));