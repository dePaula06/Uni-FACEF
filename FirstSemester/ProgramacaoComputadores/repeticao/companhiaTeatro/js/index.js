function companhiaTeatro() {

    let precoIngresso
    let ingressosVendidos
    let lucroMaximo
    const despesas = 200 
    let aux
    let maiorLucro
    let melhorQuantidade
    let melhorPreco

    maiorLucro = 0
    melhorQuantidade = 0
    melhorPreco = 0

    aux = ""

    precoIngresso = 5
    ingressosVendidos = 120

    alert(`Olá, vamos juntos analisar as vendas e os lucros de acordo com o preço dos ingressos!`)

    while (precoIngresso >= 1) {
        lucroMaximo = (ingressosVendidos * precoIngresso) - despesas
        aux = aux + "\n\n" + (`Preço: R$${precoIngresso} - ` +
              `quantidade: ${ingressosVendidos} - ` +
              `lucro máximo: R$${lucroMaximo}`
        );
        if(lucroMaximo > maiorLucro){
            maiorLucro = lucroMaximo;
            melhorQuantidade = ingressosVendidos;
            melhorPreco = precoIngresso
        }
        precoIngresso = precoIngresso - 0.5
        ingressosVendidos += 26
    }

    alert(aux)
    alert(`O melhor preço é: R$${melhorPreco}\n` +
    `Com quantidade vendida igual a: ${melhorQuantidade}\n` +
    `E lucro máximo de: R$${maiorLucro}`)
}