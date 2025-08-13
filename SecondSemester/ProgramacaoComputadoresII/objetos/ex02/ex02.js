/*

Crie um programa em JavaScript que:

    1. Leia os dados de 6 funcionários digitados pelo usuário. Para cada funcionário, devem ser informados:

        nome (string)

        cargo (string)

        salario (número)

        tempoServico (número de anos na empresa)

    2. Armazene os dados em um vetor de objetos.

    3. Ao final, o programa deve:

        - Exibir todos os funcionários com salário acima de R$ 5.000 e mais de 5 anos de serviço.

        - Exibir o nome do funcionário com o maior salário.

        - Calcular e exibir a média salarial da empresa.

        - Contar e exibir quantos funcionários são gerentes (cargo igual a "gerente", ignorando maiúsculas/minúsculas).

*/

function ex02(){

    let colaboradores = []
    let i
    let nome, cargo, salario, tempoServico, colaborador
    let maior
    let media = 0
    let gerente = 0

    for( i = 0; i < 6; i++ ){

        // recebendo os dados do usuário

        nome = prompt(`Digite o nome do ${i+1}° colaborador: `),
        cargo = prompt(`Digite o cargo do ${nome}: `).toUpperCase(),
        salario = Number(prompt(`Digite o salário do ${nome}: `)),
        tempoServico = Number(prompt(`Digite quantos anos ${nome} está na empresa: `))

        colaborador = {
            nome: nome,
            cargo: cargo,
            salario: salario,
            tempoServico: tempoServico

        }

        colaboradores.push(colaborador)



        // Exibir todos os funcionários com salário acima de R$ 5.000 e mais de 5 anos de serviço

        if(colaboradores[i].salario > 5000 && colaboradores[i].tempoServico > 5){
            console.log(colaboradores[i]);
        }

        // Calcular e exibir a média salarial da empresa

        media += colaboradores[i].salario

        // Contar e exibir quantos funcionários são gerentes (cargo igual a "gerente", ignorando maiúsculas/minúsculas)

        if( colaboradores[i].cargo == "GERENTE"){
            gerente ++
        }

    }

    maior = colaboradores[0]
    
    for( i = 0; i < 6; i++){

        // Exibir o nome do funcionário com o maior salário
        if( colaboradores[i].salario > maior.salario){
            maior = colaboradores[i]
        }


    }

    media = media / 6
    

    console.log(`O funcionário com maior salário é: ${maior.nome}`);
    console.log(`A média de salário da empresa é R$ ${media}`);
    console.log(`A empresa tem ${gerente} gerentes`);

}