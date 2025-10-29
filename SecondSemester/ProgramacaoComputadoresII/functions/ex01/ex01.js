function calculoDobro(n){
    let dobro
    dobro = n * 2
    return dobro
}

function mostrarDobro(dobro, n){
    console.log(`O dobro do número ${n} é ${dobro}`);
}

function calcularQuadrado(n){
    let quadrado
    quadrado = n * n
    return quadrado
}

function mostrarQuadrado(quadrado, n){
    console.log(`O quadrado do número ${n} é ${quadrado}`);
}

function main(){
    let n

    n = Number(prompt(`Digite um valor: `))

    let dobro = calculoDobro(n)
    let mensagem = mostrarDobro(dobro, n)

    let quadrado = calcularQuadrado(n)
    let mensagemQuadrado = mostrarQuadrado(quadrado, n)


    console.log(mensagem);
    console.log(mensagemQuadrado);
}

main()