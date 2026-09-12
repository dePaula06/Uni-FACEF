export function bubbleSort(vetor, fnComp) {
  let troca;

  do {

    troca = false
    for (let i = 0; i < vetor.length - 1; i++) {
      if (fnComp(vetor[i], vetor[i + 1])) {
        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];

        troca = true;
      }
    }
  } while (troca);
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

/* teste 
import students from "../data/students.js";

bubbleSort(students, compararNomeDescrescenteSituacao);

console.log(students);

*/