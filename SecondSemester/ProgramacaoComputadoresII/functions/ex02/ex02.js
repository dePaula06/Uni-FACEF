function alterarNumero(n){
    n = 100
}

function alterarVetor(n){
    n[0] = 100
}

function main(){
    let a = 10
    alterarNumero(a)
    console.log(a);

    let v = [10, 20, 30]
    alterarVetor(v)
    console.log(v);
}

main()