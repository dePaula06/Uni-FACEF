function bubbleSort(vetor) {

    let troca

    do{

        troca = false

        for( let i = 0; i < vetor.length - 1; i++) {

            if(vetor[i] > vetor[i + 1]){
                
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]

                troca = true
            }
            
        }

    } while(troca)

}

let nums = [123, 12, 56, 89, 99, 1, 0, 63, 78]
bubbleSort(nums)
console.log(nums);