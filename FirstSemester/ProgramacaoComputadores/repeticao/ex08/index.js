/* 
Faça um programa que receba a idade, o peso, a altura, a cor dos olhos (A-azul; P-preto; V-verde; e
C-castanho) e a cor dos cabelos (P-preto; C-castanho; L-louro; e R-ruivo) de seis pessoas, e que
calcule e mostre:
    - a quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 kg;
    - a média das idades das pessoas com altura inferior a 1,50 m;
    - a porcentagem de pessoas com olhos azuis entre todas as pessoas analisadas;
    - a quantidade de pessoas ruivas e que não possuem olhos azuis.
*/

function ex08() {
    let idade
    let peso
    let altura
    let corOlhos
    let corCabelos
    let i
    let result1, result2, contResult2, result3, result4

    result1 = 0
    result2 = 0
    contResult2 = 0
    result3 = 0
    result4 = 0

    for( i = 0; i < 6; i++) {
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

        do{
            corOlhos = prompt(`Digite a cor dos seus olhos (A-azul; P-preto; V-verde; e C-castanho): `).toUpperCase()
        } while( corOlhos != "A" && corOlhos != "P" && corOlhos != "V" && corOlhos != "C")

        do{
            corCabelos = prompt(`Digite a cor de seus cabelos (P-preto; C-castanho; L-louro; e R-ruivo): `).toUpperCase()
        } while( corCabelos != "P" && corCabelos != "C" && corCabelos != "L" && corCabelos != "R")

            if( idade > 50 && peso < 60){
                result1 ++
            }
            if(altura < 150){
                contResult2++
                result2 += altura
            }
            if( corOlhos == "A"){
                result3 ++
            }
            if( corCabelos == "R" && corOlhos != "A"){
                result4 ++
            }
    }

    result2 = result2 / contResult2
    result3 = (result3 / 6) * 100

    alert(`a quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 kg é: ${result1}\n` +
          `a média das idades das pessoas com altura inferior a 1,50 m é: ${result2}cm\n` +
          `a porcentagem de pessoas com olhos azuis entre todas as pessoas analisadas é: ${result3}%\n` +
          `a quantidade de pessoas ruivas e que não possuem olhos azuis é: ${result4}`
     )

}