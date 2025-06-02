function ex01() {
    let vet = []
    let i
    let mostrarPares, mostrarImpares
    let qtdPar, qtdImpar

    mostrarPares = ""
    mostrarImpares = ""

    qtdImpar = 0
    qtdPar = 0

    for( i = 0; i < 6; i++ ){
        vet.push(Number(prompt(`Informe o ${i+1}º número: `)))
    }

    //execução dos cálculos
    for( i = 0; i < 6; i++ ){
        if( vet[i] % 2 == 0){
            mostrarPares += `${vet[i]}; `
            qtdPar ++
        } else{
            mostrarImpares += `${vet[i]}; `
            qtdImpar ++
        }
    }

    alert(`A quantidade de números pares informados é: ${qtdPar}\n` +
           `Sendo os seguintes: ${mostrarPares}\n` +
           `A quantidade de números ímpares informados é: ${qtdImpar}\n` +
           `Sendo: ${mostrarImpares}`)
}

function ex01Remasterized() {
    let vet = []
    let i
    let par = []
    let impar = []

    for( i = 0; i < 6; i++ ){
        vet.push(Number(prompt(`Informe o ${i+1}º número: `)))
    }

    //execução dos cálculos
    for( i = 0; i < 6; i++ ){
        if( vet[i] % 2 == 0){
            par.push(vet[i])
        } else{
            impar.push(vet[i])
        }
    }

    alert(`Temos ${par.length} pares e ${impar.length} ímpares\n` +
           `Os pares são: ${par}\n` +
           `E os ímpares são: ${impar}`)
}
