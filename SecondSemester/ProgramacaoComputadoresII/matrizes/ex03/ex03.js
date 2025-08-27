/*

    Você deve desenvolver um programa em JavaScript que:

        1. Leia os dados de uma matriz 5x5, onde cada elemento representa o índice de poluição registrado em uma determinada região (linha) 
        e em um determinado dia (coluna).
        2. Os dados devem ser inseridos pelo usuário via prompt(), com validação para aceitar apenas valores entre 0 e 500 (índices válidos 
        de poluição).
        3. Ao final, o programa deve:
            - Exibir todos os valores da diagonal principal e calcular a sua média.
            - Exibir todos os valores da diagonal secundária e calcular a sua média.
            - Exibir qual região (linha) teve o maior índice de poluição registrado e em qual dia (coluna) isso ocorreu.
            - Calcular e exibir quantas vezes o índice foi superior a 300 (nível crítico).
            - Exibir a região que teve, em média, o menor índice de poluição ao longo dos 5 dias.

*/

function ex03(){

    let matriz = []
    let regioes = []
    let dias = []
    
    // recebendo os nomes das regiões
    for(let i = 0; i < 5; i++){
        regioes.push(prompt(`Informe a ${i+1} região: `))
    }

    // recebendo os dias
    for(let i = 0; i < 5; i++){
        dias.push(Number(prompt(`Informe o ${i+1}º dia: `)))
    }

    // inserção de dados e tratativa dos dados informados
    for( let l = 0; l < 5; l++){
        matriz[l] = []
        for(let c = 0; c < 5; c++){
            do{
                matriz[l][c] = prompt(`Informe a poluição da região ${regioes[l]}, no dia ${c}: `)
            } while (matriz[l][c] < 0 || matriz[l][c] > 500)
        }
    }

    // calculando e exibindo valores da diagonal principal e sua média

    let diagonalPrincipal = []
    let somaDiagonalPrincipal = 0
    let mediaDiagonalPrincipal

    for(let l = 0; l < 5; l++){
        diagonalPrincipal[l] = matriz[l][l]
        somaDiagonalPrincipal += matriz[l][l]
    }

    mediaDiagonalPrincipal = somaDiagonalPrincipal / matriz.length
    console.log(`Elementos da diagonal principal: ${diagonalPrincipal}`);
    console.log(`A média da diagonal principal é: ${mediaDiagonalPrincipal}`);

    // calculando e exibindo valores da diagonal secundária e sua média

    let diagonalSecundaria = []
    let somaDiagonalSecundaria = 0
    let mediaDiagonalSecundaria = 0

    for( let l = 0; l < 5; l++){
        diagonalSecundaria[l] = matriz[l][4-l]
        somaDiagonalSecundaria += matriz[l][4-l]
    }

    mediaDiagonalSecundaria = somaDiagonalSecundaria / matriz.length
    console.log(`Elementos da diagonal secundária: ${diagonalSecundaria}`);
    console.log(`A média da diagonal secundária é: ${mediaDiagonalSecundaria}`);

    // Exibir qual região (linha) teve o maior índice de poluição registrado e em qual dia (coluna) isso ocorreu

    let maiorIndicePoluicao = matriz[0][0]
    let maiorLinha = 0
    let maiorColuna = 0

    for( let l = 0; l < 5; l++){
        for(let c = 0; c < 5; c++){
            if(matriz[l][c] > maiorIndicePoluicao){
                maiorIndicePoluicao = matriz[l][c]
                maiorLinha = l
                maiorColuna = c
            }
        }
    }

    console.log(`A região ${regioes[maiorLinha]}, no dia ${dias[maiorColuna]} teve o maior índice de poluição. Que foi de: ${maiorIndicePoluicao}`);


    // Calcular e exibir quantas vezes o índice foi superior a 300 (nível crítico)

    let indiceMaior300 = 0

    for( let l = 0; l < 5; l++){
        for(let c = 0; c < 5; c++){
            if(matriz[l][c] > 300){
                indiceMaior300 ++
            }
        }
    }

    console.log(`O índice chegou ao nível crítico (maior que 300): ${indiceMaior300} vezes`);

    // Exibir a região que teve, em média, o menor índice de poluição ao longo dos 5 dias

    let mediaRegioes = []
    let somaRegiao = 0
    let mediaRegiao = 0
    let menorMedia = mediaRegioes[0]
    let menorMediaRegiao = 0

    for(let l = 0; l < 5; l++){
        mediaRegiao = 0
        somaRegiao = 0
        for(let c = 0; c < 5; c++){
            somaRegiao += matriz[l][c]
        }
        mediaRegiao = somaRegiao / matriz.length
        mediaRegioes[l] = mediaRegiao
    }

    for(let l = 0; l < 5; l++){
        if(mediaRegioes[l] < menorMedia){
            menorMedia = mediaRegioes[l]
            menorMediaRegiao = l
        }
    }

}