function carregarCidades(lista){
    lista = ["São Paulo", "Campinas", "Santos", "Sorocaba", "Carangatuba"]

    return lista
}

function padronizarNomes(lista){
    for(let i = 0; i < lista.length; i++){
        lista[i] = lista[i].toUpperCase()
    }

    return lista
}

function marcarInterior(lista){
    for(let i = 0; i < lista.length; i++){
        if(lista[i][0] == "C"){
            lista[i] = `INTERIOR: ${lista[i]}`
        }
    }

    return lista
}

function exibirCidades(lista){
    console.log(lista);
}

function main() {
    let lista = []

    lista = carregarCidades(lista)
    lista = padronizarNomes(lista)
    lista = marcarInterior(lista)

    exibirCidades(lista)
}

main()