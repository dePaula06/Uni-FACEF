function ordenacao() {

    let a, b, c, d
    let aux
    let i
    let grupo

    grupo = 1

    i = 1

    while (grupo <= 5) {
        alert(`Informe os valores do grupo ${grupo}`)
        a = prompt(`Informe o primeiro valor: `)
        a = Number(a)
        b = prompt(`Informe o segundo valor: `)
        b = Number(b)
        c = prompt(`Informe o terceiro valor: `)
        c = Number(c)
        d = prompt(`Informe o quarto valor: `)
        d = Number(d)
        alert(`Os valores do grupo ${grupo} na ordem de leitura são: ${a}, ${b}, ${c} e ${d}`)
        while (i <= 3) {
            if (a > b) {
                aux = a
                a = b
                b = aux
            }
            if (b > c) {
                aux = b
                b = c
                c = aux
            }
            if (c > d) {
                aux = c
                c = d
                d = aux
            }
            i++
        }
        alert(`Ordem crescente do grupo ${grupo}: ${a}, ${b}, ${c} e ${d}\n\n` +
        `Ordem decrescente do grupo ${grupo}: ${d}, ${c}, ${b} e ${a}`)
        grupo ++
    }

}