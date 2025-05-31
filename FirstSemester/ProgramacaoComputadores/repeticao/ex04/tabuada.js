/*
Faça um programa que receba um número, calcule e mostre a tabuada desse número.
Exemplo:
Digite um número: 5
5 * 0 = 0
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50

*/

function tabuada() {

    let number
    let tabuada
    let i
    let result
    let mensagem

    number = prompt(`Você gostaria de descobrir a tabuada do: `)
    number = Number(number)

    tabuada = prompt(`Aé qual número ele deve ser multiplicado: `)
    tabuada = Number(tabuada)

    for ( i = 0; i <= tabuada; i++) {
        result = number * i
        mensagem += `\n${number} x ${i} = ${result}\n`
    }
    
    alert(mensagem)
}