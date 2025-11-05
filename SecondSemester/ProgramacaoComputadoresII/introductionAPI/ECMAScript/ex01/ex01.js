function main() {

    let notas = [8, 9.5, 5, 6.5, 7.1, 3.4, 9.8, 10, 9.2, 2.5]

    let soma = 0
    let media 
    let aprovados = 0

    notas.forEach( function(nota, i) {

        // exibir notas
        console.log(`Nota aluno ${ i+1 }: ${nota}`);

        // calcular a soma das notas
        soma += nota

        // informar número de aprovações
        if(nota >= 7){
            aprovados++
        }

        // exibir as notas nas posições pares do vetor
        if(i % 2 == 0){
            console.log(`Posição ${i}(par): ${nota}`);
        }

    })

    // exibir a soma das notas
    console.log(`A soma de todas as notas é: ${soma}`);
    
    // calcular e exibir a media das notas
    media = soma / notas.length
    console.log(`A média das notas é: ${media}`);
    

    // informar número de aprovações
    console.log(`O número de aprovações foram: ${aprovados}`);

}