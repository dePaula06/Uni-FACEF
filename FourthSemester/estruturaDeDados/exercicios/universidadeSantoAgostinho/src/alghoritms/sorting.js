let comparou = 0;
let trocou = 0;
let passou = 0;

export function zerarContadores() {
    comparou = 0;
    trocou = 0;
    passou = 0;
}

export function obterContadores() {
    return {
        comparou,
        trocou,
        passou
    };
}


/* =========================
   BUBBLE SORT
========================= */

export function bubbleSort(vetor, fnComp) {
    let troca;

    do {
        passou++;
        troca = false;

        for (let i = 0; i < vetor.length - 1; i++) {
            comparou++;

            if (fnComp(vetor[i], vetor[i + 1])) {
                [vetor[i], vetor[i + 1]] = [
                    vetor[i + 1],
                    vetor[i]
                ];

                trocou++;
                troca = true;
            }
        }
    } while (troca);

    return vetor;
}


/* =========================
   SELECTION SORT
========================= */

export function selectionSort(vetor, fnComp) {

    for (
        let posSelect = 0;
        posSelect < vetor.length - 1;
        posSelect++
    ) {
        passou++;

        let posMenor = posSelect + 1;

        for (
            let i = posMenor + 1;
            i < vetor.length;
            i++
        ) {
            comparou++;

            if (
                fnComp(
                    vetor[posMenor],
                    vetor[i]
                )
            ) {
                posMenor = i;
            }
        }

        comparou++;

        if (
            fnComp(
                vetor[posSelect],
                vetor[posMenor]
            )
        ) {
            [
                vetor[posSelect],
                vetor[posMenor]
            ] = [
                vetor[posMenor],
                vetor[posSelect]
            ];

            trocou++;
        }
    }

    return vetor;
}


/* =========================
   MERGE SORT
========================= */

export function mergeSort(vetor, fnComp) {

    if (vetor.length < 2) {
        return vetor;
    }

    passou++;

    const meio = Math.floor(vetor.length / 2);

    let vetEsq = vetor.slice(0, meio);
    let vetDir = vetor.slice(meio);

    vetEsq = mergeSort(vetEsq, fnComp);
    vetDir = mergeSort(vetDir, fnComp);

    let posEsq = 0;
    let posDir = 0;

    const vetRes = [];

    while (
        posEsq < vetEsq.length &&
        posDir < vetDir.length
    ) {
        comparou++;

        /*
         * O comparador diz:
         * "A deve ficar depois de B?"
         *
         * Se DIR não deve ficar depois de ESQ,
         * então ESQ vem primeiro.
         */
        if (
            !fnComp(
                vetDir[posDir],
                vetEsq[posEsq]
            )
        ) {
            vetRes.push(vetEsq[posEsq]);
            posEsq++;
        } else {
            vetRes.push(vetDir[posDir]);
            posDir++;
        }
    }

    while (posEsq < vetEsq.length) {
        vetRes.push(vetEsq[posEsq]);
        posEsq++;
    }

    while (posDir < vetDir.length) {
        vetRes.push(vetDir[posDir]);
        posDir++;
    }

    return vetRes;
}


/* =========================
   QUICK SORT
========================= */

export function quickSort(
    vetor,
    fnComp,
    ini = 0,
    fim = vetor.length - 1
) {
    if (fim <= ini) {
        return vetor;
    }

    passou++;

    const pivot = fim;

    let div = ini - 1;

    for (let i = ini; i < fim; i++) {

        comparou++;

        if (
            fnComp(
                vetor[pivot],
                vetor[i]
            )
        ) {
            div++;

            if (div !== i) {
                [
                    vetor[i],
                    vetor[div]
                ] = [
                    vetor[div],
                    vetor[i]
                ];

                trocou++;
            }
        }
    }

    div++;

    comparou++;

    if (
        fnComp(
            vetor[div],
            vetor[pivot]
        ) &&
        div !== pivot
    ) {
        [
            vetor[div],
            vetor[pivot]
        ] = [
            vetor[pivot],
            vetor[div]
        ];

        trocou++;
    }

    quickSort(
        vetor,
        fnComp,
        ini,
        div - 1
    );

    quickSort(
        vetor,
        fnComp,
        div + 1,
        fim
    );

    return vetor;
}


/* =========================
   COMPARADORES
========================= */


/* ID */

export function compararIdCrescente(elemA, elemB) {
    return elemA.id > elemB.id;
}

export function compararIdDescrescente(elemA, elemB) {
    return elemA.id < elemB.id;
}


/* NOME */

export function compararNomeCrescente(elemA, elemB) {
    return elemA.nome > elemB.nome;
}

export function compararNomeDescrescente(elemA, elemB) {
    return elemA.nome < elemB.nome;
}


/* RA */

export function compararRaCrescente(elemA, elemB) {
    return elemA.ra > elemB.ra;
}

export function compararRaDescrescente(elemA, elemB) {
    return elemA.ra < elemB.ra;
}


/* =========================
   RESULTADO + NOME
========================= */

export function compararNomeCrescenteSituacao(
    elemA,
    elemB
) {
    if (elemA.resultado !== elemB.resultado) {
        return elemA.resultado > elemB.resultado;
    }

    return elemA.nome > elemB.nome;
}


/* =========================
   RESULTADO + RA
========================= */

export function compararRaCrescenteSituacao(
    elemA,
    elemB
) {
    if (elemA.resultado !== elemB.resultado) {
        return elemA.resultado > elemB.resultado;
    }

    return elemA.ra > elemB.ra;
}