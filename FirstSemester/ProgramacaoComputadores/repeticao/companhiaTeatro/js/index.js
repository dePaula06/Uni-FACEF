function companhiaTeatro() {

    let precoIngresso
    let ingressosVendidos
    let despesas
    let lucroMaximo

    precoIngresso = 5
    ingressosVendidos = 120
    despesas = 200

    alert(`Olá, vamos juntos analisar as vendas e os lucros de acordo com o preço dos ingressos!`)

    while (precoIngresso >= 1) {
        lucroMaximo = (ingressosVendidos * precoIngresso) - despesas
        alert(`Com o preço de R$${precoIngresso}\n` +
              `E o máximo de ingressos vendidos igual a ${ingressosVendidos}\n` +
              `Podemos ter um lucro máximo de R$${lucroMaximo}`
        );
        precoIngresso = precoIngresso - 0.5
        ingressosVendidos += 26
    }
}