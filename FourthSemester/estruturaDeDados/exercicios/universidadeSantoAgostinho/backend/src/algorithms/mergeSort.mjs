export function mergeSort(vetor, fnComp) {

    if (vetor.length < 2) {
        return vetor;
    }

    let meio = Math.floor(vetor.length / 2);

    let vetEsq = vetor.slice(0, meio);
    let vetDir = vetor.slice(meio);

    // Chamadas recursivas
    vetEsq = mergeSort(vetEsq, fnComp);
    vetDir = mergeSort(vetDir, fnComp);

    // Mesclagem ordenada de vetEsq com vetDir
    let posEsq = 0;
    let posDir = 0;
    let vetRes = [];

    while (posEsq < vetEsq.length && posDir < vetDir.length) {

        if (fnComp(vetEsq[posEsq], vetDir[posDir])) {

            vetRes.push(vetEsq[posEsq]);
            posEsq++;

        } else {

            vetRes.push(vetDir[posDir]);
            posDir++;
        }
    }

    // Verifica qual vetor ainda possui elementos
    let sobra;

    if (posEsq < vetEsq.length) {
        sobra = vetEsq.slice(posEsq);
    } else {
        sobra = vetDir.slice(posDir);
    }

    return [...vetRes, ...sobra];
}


/* =========================
   ID
========================= */

function compararIdCrescente(elemA, elemB) {
    return elemA.id < elemB.id;
}

function compararIdDescrescente(elemA, elemB) {
    return elemA.id > elemB.id;
}


/* =========================
   NOME
========================= */

function compararNomeCrescente(elemA, elemB) {
    return elemA.nome < elemB.nome;
}

function compararNomeDescrescente(elemA, elemB) {
    return elemA.nome > elemB.nome;
}


/* =========================
   RA
========================= */

function compararRaCrescente(elemA, elemB) {
    return elemA.ra < elemB.ra;
}

function compararRaDescrescente(elemA, elemB) {
    return elemA.ra > elemB.ra;
}


/* =========================
   SITUAÇÃO + ID
========================= */

function compararIdCrescenteSituacao(elemA, elemB) {

    // Primeiro: situação
    if (elemA.resultado !== elemB.resultado) {
        return elemA.resultado < elemB.resultado;
    }

    // Segundo: ID crescente
    return elemA.id < elemB.id;
}


function compararIdDescrescenteSituacao(elemA, elemB) {

    // Primeiro: situação
    if (elemA.resultado !== elemB.resultado) {
        return elemA.resultado < elemB.resultado;
    }

    // Segundo: ID decrescente
    return elemA.id > elemB.id;
}


/* =========================
   SITUAÇÃO + NOME
========================= */

function compararNomeCrescenteSituacao(elemA, elemB) {

    // Primeiro: situação
    if (elemA.resultado !== elemB.resultado) {
        return elemA.resultado < elemB.resultado;
    }

    // Segundo: nome crescente
    return elemA.nome < elemB.nome;
}


function compararNomeDescrescenteSituacao(elemA, elemB) {

    // Primeiro: situação
    if (elemA.resultado !== elemB.resultado) {
        return elemA.resultado < elemB.resultado;
    }

    // Segundo: nome decrescente
    return elemA.nome > elemB.nome;
}


/* =========================
   SITUAÇÃO + RA
========================= */

function compararRaCrescenteSituacao(elemA, elemB) {

    // Primeiro: situação
    if (elemA.resultado !== elemB.resultado) {
        return elemA.resultado < elemB.resultado;
    }

    // Segundo: RA crescente
    return elemA.ra < elemB.ra;
}


function compararRaDescrescenteSituacao(elemA, elemB) {

    // Primeiro: situação
    if (elemA.resultado !== elemB.resultado) {
        return elemA.resultado < elemB.resultado;
    }

    // Segundo: RA decrescente
    return elemA.ra > elemB.ra;
}


/* =========================
   TESTE
========================= */

import students from "../data/students.js";

let alunosOrdenados = mergeSort(
    students,
    compararNomeDescrescenteSituacao
);

console.log(alunosOrdenados);