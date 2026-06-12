// EXERCÍCIO 1 

/*  1. Cálculo da matriz densa
    Usuários = 1.000.000
    Filmes = 10.000
    Total de elementos = 1.000.000 * 10.000
    Total = 10.000.000.000 elementos

    Cada elemento ocupa 4 bytes:
    10.000.000.000 * 4 = 40.000.000.000 bytes

    Convertendo para GB:
    40.000.000.000 / (1024^3)
    ≈ 37,25 GB

    Portanto, a matriz densa ocuparia aproximadamente:
    ≈ 37,25 GB


    2. Cálculo da matriz esparsa (COO)

    Média de filmes assistidos por usuário = 100
    Total de avaliações reais:
    1.000.000 * 100 = 100.000.000 elementos não-zero

    Cada elemento COO armazena:
    {linha, coluna, valor}
    São 3 números de 4 bytes:

    3 * 4 = 12 bytes por tripla

    Espaço total:
    100.000.000 * 12 = 1.200.000.000 bytes

    Convertendo para GB:
    1.200.000.000 / (1024^3)
    ≈ 1,12 GB

    Portanto, a matriz esparsa ocuparia aproximadamente:
    ≈ 1,12 GB


    3. Economia de memória

    Fórmula:
    economia = ((denso - esparso) / denso) * 100

    economia = ((37,25 - 1,12) / 37,25) * 100
    economia ≈ 96,99%

    Portanto, a economia real de memória é de:
    ≈ 97%
*/

// EXERCÍCIO 2

/**
 * @param {Array} matrizEsparsa - Lista de objetos {linha, coluna, valor}
 * @param {Array} vetorDenso - Array com os pesos dos filmes
 */
function multiplicarRecomendacao(matrizEsparsa, vetorDenso) {
  
  const resultado = new Array(4).fill(0);

  
  for (const elemento of matrizEsparsa) {
    
    resultado[elemento.linha] += elemento.valor * vetorDenso[elemento.coluna];
  }

  return resultado;
}

const avaliacoes = [
  // Usuário 0 -> Filme 1 (Nota 5)
  { linha: 0, coluna: 1, valor: 5 },

  // Usuário 1 -> Filme 3 (Nota 2)
  { linha: 1, coluna: 3, valor: 2 },

  // Usuário 3 -> Filme 0 (Nota 4)
  { linha: 3, coluna: 0, valor: 4 },
];

const pesos = [10, 20, 30, 40, 50];

// Resultado esperado:
// [100, 80, 0, 40]

console.log("Seu resultado: ", multiplicarRecomendacao(avaliacoes, pesos));


// EXERCÍCIO 3

/*
 Este algoritmo é mais rápido porque percorre apenas os elementos que realmente existem na matriz esparsa. Em uma matriz densa 
 tradicional, seria necessário percorrer todas as linhas e colunas, incluindo milhões de posições contendo zero, o que desperdiça 
 processamento. Utilizando o formato COO, o algoritmo acessa somente os dados relevantes (filmes realmente avaliados), reduzindo
 drasticamente o número de operações realizadas e também o consumo de memória.
*/