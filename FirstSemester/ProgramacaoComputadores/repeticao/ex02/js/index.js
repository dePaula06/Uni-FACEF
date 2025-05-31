/*
    
Uma companhia de teatro deseja montar uma série de espetáculos. 
A direção calcula que, a R$ 5,00 o ingresso, serão vendidos 120 ingressos, e que as despesas serão de R$ 200,00. 
Diminuindo-se em R$ 0,50 o preço dos ingressos, espera-se que as vendas aumentem em 26 ingressos. 
Faça um programa que escreva uma tabela de valores de lucros esperados em função do preço do ingresso, 
fazendo-se variar esse pre-ço de R$ 5,00 a R$ 1,00, de R$ 0,50 em R$ 0,50. Escreva, ainda, para cada novo preço de ingresso, 
o lucro máximo esperado, o preço do ingresso e a quantidade de ingressos vendidos para a obtenção desse lucro.

*/

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