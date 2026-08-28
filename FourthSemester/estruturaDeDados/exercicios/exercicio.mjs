const alunos = []

function cadastrarAlunos(nome, ra, idade, sexo, nota1, nota2) {

    const media = ((nota1 + nota2) / 2)

    let resultado

    if(media >= 6) {
        resultado = "Aprovado"
    } else {
        resultado = "Reprovado"
    }

    const aluno = {
        nome, 
        ra,
        idade,
        sexo,
        nota1, 
        nota2,
        media,
        resultado
    }

    alunos.push(aluno)
}

function listarAlunos() {
    return alunos;
}

cadastrarAlunos("Pedro", 123456, 20, "Masculino", 10, 9)

console.log(listarAlunos())