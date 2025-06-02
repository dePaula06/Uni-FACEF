function ex02(){

    let i
    let par = []
    let impar = []
    let n = []

    //lendo os valores
    for( i = 0; i < 10; i++ ){
        n.push(Number(prompt(`Digite o ${i+1}º número: `)))
    }

    for( i = 0; i < 10; i++){
        if( n[i] % 2 == 0){
            par.push((n[i] + 10))
        } else{
            impar.push((n[i] * 5))
        }
    }

    alert(`Os números pares digitados acrescentados em 10: ${par}\n` +
          `e os ímpares multiplicados por 5: ${impar}`)
}