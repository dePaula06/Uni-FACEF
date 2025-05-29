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