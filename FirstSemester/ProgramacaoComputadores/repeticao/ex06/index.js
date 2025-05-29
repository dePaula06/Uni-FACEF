function transacoes() {

    let cod
    let valor
    let total
    let totalVista
    let totalPrazo
    let totalPrestacao
    let i

    total = 0
    totalVista = 0
    totalPrazo = 0
    totalPrestacao = 0

    for (i = 1; i <= 15; i++) {

        do {
            cod = prompt(`Como será efetuada a sua ${i}º transação (V para transações à vista e P para transações à prazo): `).toUpperCase()
        } while (cod != 'V' && cod != 'P')

        do {
            valor = prompt(`Qual o valor da ${i}º transação: `)
            valor = Number(valor)
        } while( valor <= 1)

        if (cod == 'V') {
            totalVista += valor
        } else {
            totalPrazo += valor
            totalPrestacao += (valor / 3)
        }
        total += valor
    }

    alert(
        `A soma dos totais das transações à vista é: R$ ${totalVista}` + 
    `\n` +
    `A soma dos totais das transações à prazo é: R$ ${totalPrazo}` +
    `\n` +
    `A soma das primeiras parcelas de cada transação á prazo é: R$ ${totalPrestacao}` +
    `\n` +
    `A soma geral das transações é: R$ ${total}`)

}