function ex02() {

  let matriz = [];
  let nomesVendedores = [];
  let somaVendedor;
  let somaDia;
  let maior, maiorLinha, maiorColuna;
  let soma = 0;
  let media = 0;

  //lendo os dados

  for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    nomesVendedores[i] = prompt(`Digite o nome do vendedor: `)
    for (let j = 0; j < 7; j++) {
      matriz[i][j] = parseInt(Math.random() * 100);
    }
  }

  // cálculo e exibição do total vendido por vendedor
  for (let i = 0; i < 4; i++) {
    somaVendedor = 0;
    for (let j = 0; j < 7; j++) {
      somaVendedor += matriz[i][j];
    }
    console.log(`O total de vendas do vendedor ${nomesVendedores[i]} é: ${somaVendedor}`);
  }

  // cálculo e exibição do total vendido por dia da semana
  for (let j = 0; j < 7; j++) {
    somaDia = 0;
    for (let i = 0; i < 4; i++) {
      somaDia += matriz[i][j];
    }
    console.log(`O total de vendas do dia ${j + 1} é: ${somaDia}`);
  }

  // exibindo o maior valor individual e sua posição na matriz
  maior = matriz[0][0];
  maiorLinha = 0;
  maiorColuna = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      if (maior < matriz[i][j]) {
        maior = matriz[i][j];
        maiorLinha = i;
        maiorColuna = j;
      }
    }
  }

  console.log(
    `O maior valor individual (${maiorLinha}x${maiorColuna}): ${maior}`
  );

  // média das vendas
  let m = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      soma += matriz[i][j];
      m++;
    }
  }
  media = soma / m;
  
  console.log(`A média geral das vendas é: ${media}`);
  
  // console.log() para depurar
  console.log(matriz);
  console.log(nomesVendedores);
}

