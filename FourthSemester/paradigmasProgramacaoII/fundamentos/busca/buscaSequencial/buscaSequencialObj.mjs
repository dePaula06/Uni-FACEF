function buscaSequencial(vetor, fnComp){
    for(let i = 0; i < vetor.length; i++){
        if(fnComp(vetor[i])) return i
    }
    return -1
}

function comparaNome(obj){
    return obj.first_name === "PEDRO"
}

import {objNomes} from '../../../data/vetor-obj-nomes.mjs'

console.log("Posição de PEDRO: ", buscaSequencial(objNomes, comparaNome));