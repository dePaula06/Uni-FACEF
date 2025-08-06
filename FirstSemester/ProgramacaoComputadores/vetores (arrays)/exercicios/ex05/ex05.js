/*

Exercício 5 – Comparações com o Primeiro Elemento

Crie uma função exe5() que:

    1.	Leia 10 números inteiros e armazene em um vetor.
    2.	Compare todos os elementos com o primeiro número digitado.
    3.	Ao final, exiba:
        -	Quantos valores são maiores que o primeiro
        -	Quantos são menores
        -	Quantos são iguais

    Exemplo:
    Se o vetor for [7, 3, 7, 10, 2, 7, 5, 7, 1, 9], o programa deve exibir:
        •	Maiores que o primeiro: 2
        •	Menores que o primeiro: 3
        •	Iguais ao primeiro: 4

*/

function ex05() {

    let i
    let n = []
    let maior, menor, igual

    maior = 0
    menor = 0
    igual = 0

    for( i= 0; i < 10; i++){
        n.push(Number(prompt(`Digite o ${i+1}º número inteiro: `)))

        if( n[i] > n[0]){
            maior++
        } else if( n[i] == n[0]){
            igual++
        } else if( n[i] < n[0]){
            menor++
        }
    }

    alert(`${n}\n`+`Maiores que ${n[0]}: ${maior}\n` +`Iguais à ${n[0]}: ${igual}\n` +`Menores que ${n[0]}: ${menor}\n`)

}