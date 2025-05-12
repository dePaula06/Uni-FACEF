function faixaEtaria(){

    let idade
    let i
    let faixa1, faixa2, faixa3, faixa4, faixa5
    let total
    let primeiraFaixa
    let ultimaFaixa

    faixa1 = 0
    faixa2 = 0
    faixa3 = 0
    faixa4 = 0
    faixa5 = 0

    i = 1
    total = 0

    while (i <= 8){
        idade = prompt(`Digite a idade da pessoa ${i}: `)
        idade = Number(idade)
        i ++
        total ++

        if(idade <= 15){
            faixa1 ++
        } else if(idade >= 16 && idade <= 30){
            faixa2 ++
        } else if(idade >= 31 && idade <= 45){
            faixa3 ++
        } else if(idade >= 46 && idade <= 60){
            faixa4 ++
        } else{
            faixa5 ++
        }
    }

    primeiraFaixa = (faixa1 / total) * 100
    ultimaFaixa = (faixa5 / total) * 100

    alert(
        `A primeira faixa etária (até 15 anos): ${faixa1}\n` +
        `A segunda faixa etária (16 a 30 anos): ${faixa2}\n` +
        `A terceira faixa etária (31 a 45 anos): ${faixa3}\n` +
        `A quarta faixa etária (46 a 60 anos): ${faixa4}\n` +
        `A quinta faixa etária (acima de 60 anos): ${faixa5}\n\n` +
        `Porcentagem da primeira faixa: ${primeiraFaixa}%\n` +
        `Porcentagem da última faixa: ${ultimaFaixa}%`
    );
}