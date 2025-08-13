/*

    Crie um programa em JavaScript que:

        1. Leia os dados de 7 projetos desenvolvidos por diferentes empresas de tecnologia.
        Para cada projeto, devem ser informados:

            -  nomeProjeto (string)
            -  empresa (string)
            -  duracaoMeses (número inteiro)
            -  orcamento (valor em reais, número)

        2. Armazene todos os dados em um vetor de objetos.
        3. Ao final, o programa deve realizar as seguintes análises:

            -  Exibir todos os projetos com duração superior a 12 meses e orçamento acima de R$ 1.000.000,00.
            -  Exibir o nome do projeto com o maior orçamento.
            -  Calcular e exibir a média de duração dos projetos.
            -  Informar quantos projetos foram realizados pela empresa "InovaTech", independente da forma como foi digitado o nome.
            -  Calcular o total gasto (soma de orçamento) apenas com os projetos que têm menos de 6 meses de duração.

*/

function registerProject(){

    // declarando  as variáveis
    let projetos = []
    let projeto
    let nomeProjeto, empresa, duracaoMeses, orcamento
    let i

    // cadastrando e armazenando projetos

    for( i = 0; i < 7; i++ ){

        nomeProjeto = prompt(`Digite o nome do projeto: `),
        empresa = prompt(`Digite a empresa a qual pertence o projeto (${nomeProjeto}): `).toLowerCase(),
        duracaoMeses = Number(prompt(`Digite em meses o tempo de duração do projeto (${nomeProjeto}): `)),
        orcamento = Number(prompt(`Digite em reais (R$) o orçamento do projeto (${nomeProjeto}): `)),

        projeto = {
            nomeProjeto: nomeProjeto,
            empresa: empresa,
            duracaoMeses: duracaoMeses,
            orcamento: orcamento
        }

        projetos.push(projeto)
    }

    // Exibir todos os projetos com duração superior a 12 meses e orçamento acima de R$ 1.000.000,00

    for(i = 0;  i < projetos.length; i++){
        if(projetos[i].duracaoMeses > 12 && projetos[i].orcamento > 1000000){
            console.log(projetos[i]);
        }
    }

    // Exibir o nome do projeto com o maior orçamento

    let maiorOrcamento = projetos[0]

    for(i = 0; i < projetos.length; i++){
        if(projetos[i].orcamento > maiorOrcamento.orcamento){
            maiorOrcamento = projetos[i]
        }
    }

    console.log(`O projeto com maior orçamento é: ${maiorOrcamento.nomeProjeto}`);

    // Calcular e exibir a média de duração dos projetos

    let soma = 0
    let media

    for(i = 0; i < projetos.length; i++){
        soma += projetos[i].duracaoMeses
    }

    media = soma / projetos.length

    console.log(`A média de duração em meses do projetos é: ${media}, e em anos é: ${media / 12}`);

    // Informar quantos projetos foram realizados pela empresa "InovaTech", independente da forma como foi digitado o nome

    let inovaTech = 0

    for( i = 0; i < projetos.length; i++){
        if(projetos[i].empresa === "inovatech"){
            inovaTech++
        }
    }

    console.log(`O  número de projetos da empresa InovaTech foi: ${inovaTech}`);

    // Calcular o total gasto (soma de orçamento) apenas com os projetos que têm menos de 6 meses de duração

    let somaOrcamento = 0

    for(i = 0; i <projetos.length; i++){
        if(projetos[i].duracaoMeses < 6){
            somaOrcamento += projetos[i].orcamento
        }
    }

    console.log(`O total gasto em projetos com menos de 6 meses foi: R$ ${somaOrcamento}`);
    
    
}