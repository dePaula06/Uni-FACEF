/*

Faça um programa que receba dez idades, pesos e alturas, calcule e mostre:
    - a média das idades das dez pessoas;
    - a quantidade de pessoas com peso superior a 90 kg e altura inferior a 1,50 metro;
    - a porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90 m.

*/

function ex09() {

    let idade
    let peso
    let altura
    let i
    let mediaIdades
    let quantSobrepeso
    let maior190
    let resultadoPorcentagem

    mediaIdades = 0
    maior190 = 0
    resultadoPorcentagem = 0

    for( i = 0; i < 10; i++){
         do{
            idade = prompt(`Digite a sua idade: `)
            idade = Number(idade)
        } while( idade <= 0 )

        do{
            peso = prompt(`Digite o seu peso: `)
            peso = Number(peso)
        } while( peso <= 0 )

        do{
            altura = prompt(`Digite a sua altura (em cm): `)
            altura = Number(altura)
        } while( altura <= 0)

        mediaIdades += idade

        if( peso > 90 && altura < 150){
            quantSobrepeso++
        }

        if( altura > 190){
            maior190++
            if( idade >= 10 && idade <=30){
                resultadoPorcentagem++
            }
        }
    }

    mediaIdades = mediaIdades / 10

    resultadoPorcentagem = ( resultadoPorcentagem / maior190 ) * 100

    alert(`a média das idades das dez pessoas: ${mediaIdades} anos.\n`+
          `a quantidade de pessoas com peso superior a 90 kg e altura inferior a 1,50 metro: ${quantSobrepeso}\n` +
          `a porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de 1,90 m: ${resultadoPorcentagem}%`
    )


}