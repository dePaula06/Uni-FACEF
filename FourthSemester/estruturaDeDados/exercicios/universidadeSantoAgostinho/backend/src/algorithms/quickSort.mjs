export function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {

//só trabalhamos se a aregião do vetor tiver, pelo menos, 2 elementos
  if (fim <= ini) return; //condição de saída

  const pivot = fim; //pivot

  let div = ini - 1; //divisor ded regiões(inicialmente, antes do início do vetor)

  for (let i = ini; i < fim; i++) {
    if (fnComp(vetor[pivot], vetor[i])) {
      div++;
      if (div !== i) {
        [vetor[i], vetor[div]] = [vetor[div], vetor[i]];
      }
    }
  }

  div++;
  //colocamos o pivô em seu lugar definitivo
  if (fnComp(vetor[div], vetor[pivot]) && div !== pivot) {
    [vetor[div], vetor[pivot]] = [vetor[pivot], vetor[div]];
  }


  quickSort(vetor, fnComp, ini, div - 1);
  quickSort(vetor, fnComp, div + 1, fim);

}

/* Id */
function compararIdCrescente(elemA, elemB) {
  return elemA.id > elemB.id;
}
function compararIdDescrescente(elemA, elemB) {
  return elemA.id < elemB.id;
}

/* Nome */
function compararNomeCrescente(elemA, elemB) {
  return elemA.nome > elemB.nome;
}
function compararNomeDescrescente(elemA, elemB) {
  return elemA.nome < elemB.nome;
}

/* RA */
function compararRaCrescente(elemA, elemB) {
  return elemA.ra > elemB.ra;
}
function compararRaDescrescente(elemA, elemB) {
  return elemA.ra < elemB.ra;
}

/* Por situação + outro parâmetro */
function compararIdCrescenteSituacao(elemA, elemB) {
  if (elemA.resultado !== elemB.resultado) {
    return elemA.resultado > elemB.resultado;
  }
  return elemA.id > elemB.id;
}
function compararIdDescrescenteSituacao(elemA, elemB) {
  if (elemA.resultado !== elemB.resultado) {
    return elemA.resultado > elemB.resultado;
  }
  return elemA.id < elemB.id;
}

/* Nome */
function compararNomeCrescenteSituacao(elemA, elemB) {
  if (elemA.resultado !== elemB.resultado) {
    return elemA.resultado > elemB.resultado;
  }
  return elemA.nome > elemB.nome;
}
function compararNomeDescrescenteSituacao(elemA, elemB) {
  if (elemA.resultado !== elemB.resultado) {
    return elemA.resultado > elemB.resultado;
  }
  return elemA.nome < elemB.nome;
}

/* RA */
function compararRaCrescenteSituacao(elemA, elemB) {
  if (elemA.resultado !== elemB.resultado) {
    return elemA.resultado > elemB.resultado;
  }
  return elemA.ra > elemB.ra;
}
function compararRaDescrescenteSituacao(elemA, elemB) {
  if (elemA.resultado !== elemB.resultado) {
    return elemA.resultado > elemB.resultado;
  }
  return elemA.ra < elemB.ra;
}


import students from "../data/students.js";

quickSort(students, compararNomeDescrescenteSituacao);

console.log(students);

