listaAlunos = []

def cadastroAluno(listaAlunos):
    for i in range(5):
        codigo = int(input("Código: "))
        notas = []
        for j in range(3):
            nota = float(input("Digite a nota: " ))
            notas.append(nota)
        media = (sum(notas) / len(notas))

        aluno = {
            'codigo': codigo,
            'notas': notas,
            'media': media
        }

        listaAlunos.append(aluno)
    return listaAlunos

def getAluno(listaAlunos, nMatricula):
    for i in listaAlunos:
        if i['codigo'] == nMatricula:
            return i

def mediaAluno(listaAlunos):
    medias = []
    for aluno in listaAlunos:
        media = sum(aluno['notas']) / 3
        if media >= 6:
            situacao = "aprovado"
        else:
            situacao = "reprovado"

        a = {
            'codigo': aluno['codigo'],
            'media': media, 
            'situacao': situacao
        }
        medias.append(a)

    return medias

def retornoAprovados(medias):
    aprovados = []
    for i in medias:
        if i['situacao'] == 'aprovado':
            aprovados.append(i)
    
    return aprovados
        


## listaAlunos = cadastroAluno(listaAlunos)
listaAlunos = [
  { "codigo": 1, "notas": [10.0, 8.0, 9.0], "media": 9.0 },
  { "codigo": 2, "notas": [5.0, 6.0, 4.0], "media": 5.0 },
  { "codigo": 3, "notas": [7.0, 6.0, 8.0], "media": 7.0 },
  { "codigo": 4, "notas": [9.0, 8.0, 7.0], "media": 8.0 },
  { "codigo": 5, "notas": [10.0, 2.0, 8.0], "media": 6.666666666666667 }
]

print(listaAlunos)

nMatricula = int(input("Digite o número de matrícula do aluno procurado: "))
print(getAluno(listaAlunos, nMatricula))

medias = mediaAluno(listaAlunos)

print("\nAprovados: ", retornoAprovados(medias))