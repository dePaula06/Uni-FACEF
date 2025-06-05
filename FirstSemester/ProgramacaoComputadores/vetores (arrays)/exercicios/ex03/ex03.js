/*
Crie uma função que irá simular uma pesquisa de opinião sobre um evento.

Ler opinião de 10 pessoas

O programa deve:
    1 - Gostou muito
    2 - Gostou
    3 - Não gostou
Armazenar respostas em um vetor.

Ao final, exibir:

    - Quantas pessoas responderam cada opção;
    - A porcentagem de pessoas que não gostaram.
*/
function ex03() {

    let i
    let escala = []
    let one, two, three
    let porcentThree

    one = 0
    two = 0
    three = 0

    for( i = 0; i < 10; i++){
        do{
            // push insere na hora, ou seja, não valeria de nada a validação.
            escala[i] = (Number(prompt(`(${i+1}) Você gostou do nosso evento?\n (1 - "Gostou muito", 2 - "Gostou" e 3 - "Não gostou"): `)))
        } while(escala[i] != 1 && escala[i] != 2 && escala[i] != 3)
        
        if(escala[i] == 1){
            one ++
        } else if(escala[i] == 2){
            two ++
        } else{
            three ++
        }
    }

    porcentThree = (three / escala.length) * 100

    alert(`${one} pessoas gostaram muito\n` + `${two} pessoas gostaram\n` + `${three} pessoas não gostaram, que é equivalente a ${porcentThree}% do valor total.`)

}