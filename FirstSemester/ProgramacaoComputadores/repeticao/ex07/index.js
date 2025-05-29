function ex07() {

    let idade, altura, peso
    let i, j, k, l
    let mediaAltura, porcentagemMenos40Kg

    j = 0
    k = 0
    l = 0

    mediaAltura = 0
    porcentagemMenos40Kg = 0

    for ( i = 0; i < 5; i++){
        do{
            idade = prompt(`Digite a sua idade: `)
            idade = Number(idade)
        } while( idade <= 0)

        do{
            altura = prompt(`Digite a sua altura em cm: `)
            altura = Number(altura)
        } while( altura <= 0)

        do{
            peso = prompt(`Digite seu peso em kg: `)
            peso = Number(peso)
        } while( peso <= 0)

        if( idade > 50) {
            j ++
        } else if (idade >= 10 && idade <= 20){
            k++
            mediaAltura += altura
        }

        if( peso <= 40) {
            l++
        }
    }

    mediaAltura = mediaAltura / k
    porcentagemMenos40Kg = (l / i) * 100

    alert(`O número de pessoa acima dos 50 anos é: ${j}` +
    `\n` +
    `A média das alturas das pessoas com idade entre 10 e 20 anos é: ${mediaAltura}` +
    `\n` +
    `A porcentagem de pessoas com peso inferior a 40kg entre todas analisadas é: ${porcentagemMenos40Kg}%`)

}