export function selectionSort(vetor, fnComp) {

    for (let posSelect = 0; posSelect < vetor.length - 1; posSelect++) {

        let posMenor = posSelect + 1

        for(let i = posMenor + 1; i < vetor.length; i++) {

            if(fnComp(vetor[posMenor], vetor[i])){
                posMenor = i
            }

        }

        if(fnComp(vetor[posSelect], vetor[posMenor])) {
            [vetor[posSelect], vetor[posMenor]] = [vetor[posMenor], vetor[posSelect]]
        }
    }

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

/*
import students from "../data/students.js";

selectionSort(students, compararRaCrescenteSituacao);

console.log(students);

*/