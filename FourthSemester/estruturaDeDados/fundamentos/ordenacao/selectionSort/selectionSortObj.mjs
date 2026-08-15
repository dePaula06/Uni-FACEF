let passou, comparou, trocou

function selectionSort(vetor, fnComp) {

    passou = 0, comparou = 0, trocou = 0

    for( let posSelect = 0; posSelect < vetor.length - 1; posSelect++){

        passou++
        let posMenor = posSelect + 1

        for( let i = posMenor + 1; i < vetor.length; i++){

            if(fnComp(vetor[posMenor], vetor[i])){
                posMenor = i
                comparou++
            }

        }
        comparou++

        if(fnComp(vetor[posSelect], vetor[posMenor])){
            [vetor[posSelect], vetor[posMenor]] = [vetor[posMenor], vetor[posSelect]]
            trocou++
        }
    }

}


import {objMotoristas} from "../../../data/motoristas-obj-desord.mjs"

selectionSort(objMotoristas, (elemA, elemB) => elemA.nome_motorista > elemB.nome_motorista);

console.log(objMotoristas)

