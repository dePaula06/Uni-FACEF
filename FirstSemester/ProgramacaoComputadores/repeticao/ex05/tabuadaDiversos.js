/*

Faça um programa que mostre as tabuadas dos números de 1 a 10.

*/

function tabuada() {

    let i, k, result, mensagem

    for(i = 1; i <= 10; i++) {
        for( k = 0; k <= 10; k++) {
            result = i * k
            mensagem += `${i} . ${k} = ${result}\n`
        }
        alert(mensagem)
        mensagem = ""
    }

}