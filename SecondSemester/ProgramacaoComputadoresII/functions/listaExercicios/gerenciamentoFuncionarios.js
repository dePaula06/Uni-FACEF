function cadastroInicial(funcionarios) {
    funcionarios.push({nome: "Pio", cargo: "Diretor", salario: 10000})
    funcionarios.push({nome: "Teresa", cargo: "Doutora", salario: 15000})
    funcionarios.push({nome: "Francisco", cargo: "Arquiteto", salario: 8200})
}

function cadastrarNovoFuncionario(funcionarios) {
    funcionarios.push({
        nome: prompt(`Digite o nome do novo funcionário: `),
        cargo: prompt(`Digite o cargo do novo funcionário: `),
        salario: Number(prompt(`Digite o salário do novo funcionário: `))
    })
}

function listarNomesDosFuncionarios(funcionarios) {
    for(let funcionario of funcionarios) {
        console.log(funcionario.nome);
    }
}

function aumentarSalario(funcionarios) {
    for(let i = 0; i < funcionarios.length; i++) {
        funcionarios[i].salario += funcionarios[i].salario * 0.1
    }
}

function buscarSalarioPeloNome(funcionarios, nomeFuncionario) {
    let funcionarioEncontrado = false
    for(let i = 0; i < funcionarios.length; i++){
        if( funcionarios[i].nome === nomeFuncionario ){
            console.log(funcionarios[i].salario);
            funcionarioEncontrado = true
        }
    }

    if( !funcionarioEncontrado) {
        alert("Funcionário não encontrado!")
    }

}

function atualizarCargo(funcionarios, nomeFuncionario) {
    let funcionarioEncontrado = false
    for(let i = 0; i < funcionarios.length; i++){
        if( funcionarios[i].nome === nomeFuncionario){
            funcionarios[i] = ({
                nome: funcionarios[i].nome,
                cargo: prompt(`Digite o nome do novo cargo de ${funcionarios[i].nome}: `),
                salario: funcionarios[i].salario
            })
            funcionarioEncontrado = true
            return
        }
        if( !funcionarioEncontrado) {
        alert("Funcionário não encontrado!")
    }
    }
}

function removerFuncionario(funcionarios, nomeFuncionario){
    let funcionarioEncontrado = false
    for(let i = 0; i < funcionarios.length; i++){
        if(funcionarios[i].nome === nomeFuncionario){
            funcionarios.splice(i, 1)
            funcionarioEncontrado = true
            return
        }
    }

    if( !funcionarioEncontrado) {
        alert("Funcionário não encontrado!")
    }
}

function exibirMediaSalarial(funcionarios) {
    let soma = 0

    for(let i = 0; i < funcionarios.length; i++) {
        soma += funcionarios[i].salario
    }

    let media
    media = soma / funcionarios.length

    console.log(`A média salarial da empresa é: ${media}`);
}

function promocaoAutomatica(funcionarios) {
    for(let i = 0; i < funcionarios.length; i++){
        if(funcionarios[i].salario < 2000) {
            funcionarios[i].salario = funcionarios[i].salario * 1.15
            funcionarios[i].cargo = "Analista Junior"
        }
    }
}

function maiorSalario(funcionarios) {
    let posicao = 0
    let maiorSalario = funcionarios[0].salario
    for(let i = 0; i < funcionarios.length; i++) {
        if(funcionarios[i].salario > maiorSalario){
            maiorSalario = funcionarios[i].salario
            posicao = i
        }
    }
    console.log(`O funcionário com o maior salário é: ${funcionarios[posicao].nome}`);
    
}

function main() {

    let vetor = []
    cadastroInicial(vetor)
    
    let opcao
    
    do {
        opcao = Number(prompt(`
        1 - Cadastrar novo funcionário |
        2 - Listar o nome dos funcionários |
        3 - Aumentar o salário de todos em 10% |
        4 - Buscar salário pelo nome |
        5 - Atualizar cargo de funcionário |
        6 - Remover funcionário da empresa |
        7- Exibir média salarial da empresa |
        8 - Promoção automática |
        9 - Funcionário com maior salário
        10 - Encerrar o programa
                `))

        switch(opcao) {
            case 1: cadastrarNovoFuncionario(vetor); 
                break;
            case 2: listarNomesDosFuncionarios(vetor);
                break;
            case 3: aumentarSalario(vetor);
                break;
            case 4: 
                let buscaNome = prompt(`Digite o nome do funcionário: `)
                buscarSalarioPeloNome(vetor, buscaNome);
                break;
            case 5: atualizaNome = prompt(`Digite o nome do funcionário: `)
                    atualizarCargo(vetor, atualizaNome);
                    break;
            case 6: let removeNome = prompt(`Digite o nome do funcionário: `)
                    removerFuncionario(vetor, removeNome);
                    break;
            case 7: exibirMediaSalarial(vetor)
                break;
            case 8: promocaoAutomatica(vetor);
                break;
            case 9: maiorSalario(vetor);
                break;
                case 10: alert("Programa encerrado");
                break;
            default: alert("Opção inválida");
                break;
        }
    } while (opcao != 10)
    console.log(vetor);
}

main()