let passou, comparou, trocou

function selectionSort(vetor) {

    passou = 0, comparou = 0, trocou = 0

    for(let posSelect = 0; posSelect < vetor.length - 1; posSelect++) {
        passou++
        let posMenor = posSelect + 1

        for(let i = posMenor + 1; i < vetor.length; i++) {
            if(vetor[posMenor] > vetor[i]){
                posMenor = i
                comparou++
            }
        }
        comparou++
        if(vetor[posSelect] > vetor[posMenor]){
            [vetor[posSelect], vetor[posMenor]] = [vetor[posMenor], vetor[posSelect]]
            trocou++
        }

}
}

/*
let nums = [123, 12, 56, 89, 99, 1, 0, 63, 78]
selectionSort(nums);
console.log(nums);

console.log("\nPassou: ", passou, "\nComparou: ", comparou, "\nTrocou: ", trocou);
*/
console.log('\n\n\n --- TROCA DE NOMES ---\n\n\n');

import { nomes } from '../../../data/nomes-desord.mjs'
selectionSort(nomes);

console.log(nomes);

console.log("\nPassou: ", passou, "\nComparou: ", comparou, "\nTrocou: ", trocou);




