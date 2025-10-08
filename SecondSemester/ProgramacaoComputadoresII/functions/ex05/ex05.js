function listarNomes(alunos) {
    for(let i = 0; i < alunos.length; i++){
        console.log(alunos[i].nome);
    }
}

function aumentarIdade(alunos) {
    for (let aluno of alunos) {
        aluno.idade += 1
    }
}

function cadastroInicial(alunos) {
    alunos.push({nome: "Ana", idade: 20, curso: "Sistemas de Informação"})
    alunos.push({nome: "Carlos", idade: 22, curso: "Ciência da Computação"})
    alunos.push({nome: "Beatriz", idade: 19, curso: "Engenharia de Software"})
}

function cadastrarNovo(alunos) {
    alunos.push({
        nome: prompt(`Digite o nome do aluno: `),
        idade: Number(prompt(`Digite a idade do aluno: `)),
        curso: prompt(`Digite o curso do aluno: `)
    })
}

function removerAluno(alunos, removeNome){
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i].nome === removeNome){
            alunos.splice(i, 1)
            return
        }
    }

    alert('Aluno não encontrado')
}

function main() {
    let vetor = []
    cadastroInicial(vetor);

    let opcao
    do {
        opcao = Number(prompt(`1 - Cria aluno | 2 - Listar nomes | 3 - Atualizar idade | 4 - Remove aluno | 5 - Sair`))
        switch (opcao) {
            case 1: cadastrarNovo(vetor);
                break;
            case 2: listarNomes(vetor);
                break;
            case 3: aumentarIdade(vetor);
                break;
            case 4: let removeNome = prompt(`Informe nome para a remoção: `) 
                removerAluno(vetor, removeNome);
                break
            case 5: alert("Programa encerrado");
                break;
            default: alert("Opção inválida");
                break;
            }
        }   while(opcao != 5);
        console.log(vetor);
}

main()