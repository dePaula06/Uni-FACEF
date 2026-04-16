// O(1) => Porque a operação de acesso ao primeiro elemento do array é feita em tempo constante, independemente do tamanho do array 


    console.log("\n========= O(1) =============\n");
    
    function exampleO1(arr) {
        if(arr.length === 0) return null
        return arr[0]
    }

    const arr = [5, 6, 7, 8, 9, 2, 3, 4]
    console.log(exampleO1(arr));
    

    // O(log n)

    console.log("\n========= O(log n) =============\n");

    function exampleOlogN(n){

        let i  = 1
        while (i < n) {
            console.log(i);
            i *= 2
            
        }
    }

    console.log(exampleOlogN(10));

    // O(n)

    console.log("\n============ O(n) ============\n");
    

    function exampleOn(arr) {
        
        for( let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }

    }

    exampleOn(arr)

    // O (n^2)

    console.log("\n=============== O(n²) ===============\n");
    

    function exampleN2(arr) {
        
        for( let i = 0; i < arr.length; i++) {

            for (let j = 0; j < arr.length; j++){

                console.log(arr[i], arr[j]);
                

            }

        }

    }

    const arrN2 = [0, 1, 2, 3, 4]
    console.log(exampleN2(arrN2));
    

    