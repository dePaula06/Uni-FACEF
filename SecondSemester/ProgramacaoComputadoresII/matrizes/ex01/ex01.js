/*

    Crie um programa que:
        - Leia os valores de uma matriz 3x3 usando prompt().
        - Exiba:
            - A soma de todos os elementos
            - A quantidade de números pares
            - Os valores da diagonal secundária ([0][2], [1][1], [2][0])

*/

function ex01(){

    let mat = []
    let soma = 0
    let pares = 0

    // lendo valores

    for( let i = 0; i < 3; i++){
        mat[i] = []
        for( let j = 0; j < 3; j++){
            mat[i][j] = parseInt(Math.random() * 10)
        }
    }

    // somando todos os valores

    for( let i = 0; i < 3; i++){
        for( let j = 0; j < 3; j++){
            soma += mat[i][j]
        }
    }

    console.log(`A soma de todos os valores da matriz é: ${soma}`);

    // descobrindo a quantidade de números pares

    for( let i = 0; i < 3; i++){
        for( let j = 0; j < 3; j++){
            if( mat[i][j] % 2 === 0){
                pares++
            }
        }
    }

    console.log(`A matriz tem ${pares} números pares`);

    // descobrindo valores da diagonal secundária

    console.log("Diagonal secundária: ");

    j = mat.length - 1
    for( let i = 0; i < 3; i++){
        console.log(`   - Posição [${i}x${j}]: ${mat[i][j]}`);
        j--
    }

    // mostrando a matriz para verificar os cálculos
    console.log(mat);

}