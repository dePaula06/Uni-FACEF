/*

Exercício 4 – Média e Valores Acima da Média

Crie uma função exe4() que:
1.	Leia 8 números e armazene em um vetor.
2.	Calcule a média desses números.
3.	Crie e exiba um novo vetor com os números maiores do que a média.
4.	Ao final, mostre:
    -	A média calculada
    -	Quantos valores estão acima da média
    -	Os próprios valores acima da média

Dica:
    Use dois vetores: um para os valores lidos, outro para os que estão acima da média.

*/

function ex04() {

    let i   
    let n = []
    let acimaMedia = []
    let media
    let cont = 0

    for( i = 0; i < 8; i++) {

        n.push(Number(prompt(`Informe a ${i + 1}ª nota: `)))

        media += n

        if( n > 7 ){
            acimaMedia.push(n[i])
            cont++
        }

    }

    // Terminar questão

}