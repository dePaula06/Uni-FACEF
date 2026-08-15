let pass, comps, trocas

function bubbleSortObj(vetor, fnComp) {

    pass = 0, comps = 0, trocas = 0

    let trocou

    do {
        pass++
        trocou = false

        for(let i = 0; i < vetor.length - 1; i++){
            comps++
            if(fnComp(vetor[i], vetor[i + 1])){

                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]

                trocou = true
                trocas++
            }

        }

    } while(trocou)

}

import {objMotoristas} from '../../../data/motoristas-obj-desord.mjs';

bubbleSortObj(objMotoristas, (elemA, elemB) => 
    elemA.nome_motorista > elemB.nome_motorista
)

console.log(objMotoristas);
console.log("Pass = ",pass,"Comps = ", comps, "Trocas", trocas);