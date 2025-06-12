/*

Exercício 6 – Procurando um Número no Vetor

Crie uma função exe6() que:
    1.	Leia 12 números inteiros e armazene em um vetor.
    2.	Em seguida, peça ao usuário para digitar um número a ser buscado.
    3.	O programa deve:
        -	Informar se o número está ou não no vetor.
        -	Se estiver, mostrar todas as posições onde ele aparece.
        -	Mostrar também quantas vezes ele aparece.
___________________________________________________________________________________________________________________________________________
    
    Exemplo:
        Se o vetor for:
        [4, 7, 2, 7, 9, 1, 7, 3, 4, 8, 7, 5]
        E o número digitado for 7:
        O número 7 aparece 4 vezes, nas posições: 1, 3, 6, 10
    
*/

function ex06() {

    let i
    let vet = []
    let nBusca
    let contIguais
    let vetPosicoes = []

    contIguais = 0

    for( i = 0; i < 12; i++) {
        vet.push(Number(prompt(`Digite o ${i+1}º número inteiro: `)))
    }

    nBusca = Number(prompt(`Digite o número que deve ser buscado: `))

    for( i =  0; i < 12; i++) {
        if( vet[i] == nBusca){
            contIguais++
            vetPosicoes.push(i)
        }
    }

    if(contIguais > 0){
        alert(`O número buscado é ${nBusca}, e ele está no vetor.\n` + `Apareceu: ${contIguais} vezes\n` + `Nas posições: ${vetPosicoes}\n` + ``)
    } else{
        alert(`Não existe o número ${nBusca} no vetor`)
    }
}
