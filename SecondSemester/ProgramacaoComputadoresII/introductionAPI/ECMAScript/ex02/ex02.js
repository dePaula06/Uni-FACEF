let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
];

// declarando variáveis de soma
let somaInfo = 0
let somaModa = 0
let somaEduc = 0

vendas.forEach( (venda, i) => {
    if( venda.categoria == "Informática") {
        somaInfo = somaInfo + (venda.valor * venda.quantidade)
    } else if( venda.categoria == "Moda") {
        somaModa = somaModa + (venda.valor * venda.quantidade)
    } else if( venda.categoria == "Educação") {
        somaEduc = somaEduc + (venda.valor * venda.quantidade)
    } else{
        return console.log("Essa categoria é inexistentes");
    }
} )

// exibindo os totais

console.log(`Total (Informática): ${somaInfo}`);
console.log(`Total (Moda): ${somaModa}`);
console.log(`Total (Educação): ${somaEduc}`);

//  Identificar a categoria com maior valor de vendas total

categorias = [somaEduc, somaInfo, somaModa]
maiorCategoria = categorias[0]
categoria = 0

categorias.forEach( (totalCategoria, i) => {
    if(totalCategoria > maiorCategoria) {
        maiorCategoria = totalCategoria;
        categoria = i
    }
})

let posicoes = {
    0: "Educação",
    1: "Informática",
    2: "Moda"
}

console.log(`A categoria campeã foi: ${posicoes[categoria]}, com o valor total de R$${maiorCategoria}`);

