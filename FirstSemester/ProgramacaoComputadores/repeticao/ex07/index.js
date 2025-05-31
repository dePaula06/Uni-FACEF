/*

Faça um programa que receba a idade, a altura e o peso de cinco pessoas, calcule e mostre:
a quantidade de pessoas com idade superior a 50 anos;
a média das alturas das pessoas com idade entre 10 e 20 anos;
a porcentagem de pessoas com peso inferior a 40 kg entre todas as pessoas analisadas.

*/

function ex07() {

    let idade, altura, peso
    let i, j, k, l
    let mediaAltura, porcentagemMenos40Kg

    j = 0
    k = 0
    l = 0

    mediaAltura = 0
    porcentagemMenos40Kg = 0

    for ( i = 1; i <= 5; i++){
        do{
            idade = prompt(`Digite a ${i}º sua idade: `)
            idade = Number(idade)
        } while( idade <= 0)

        do{
            altura = prompt(`Digite a ${i}º altura em cm: `)
            altura = Number(altura)
        } while( altura <= 0)

        do{
            peso = prompt(`Digite o ${i}º peso em kg: `)
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