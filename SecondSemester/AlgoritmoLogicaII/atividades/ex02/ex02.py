## Exercício 02

def cadastrarAluno(lista, nome, nota):
    aluno = {"Nome": nome, "Nota": nota}
    lista.append(aluno)
    return lista

def media(lista):
    soma = 0
    for aluno in lista:
        soma += aluno["Nota"]
    return soma / len(lista)

def maior_nota(lista):
    maior = lista[0]["Nota"]
    for aluno in lista:
        if aluno["Nota"] > maior:
            maior = aluno["Nota"]
    return maior

def menor_nota(lista):
    menor = lista[0]["Nota"]
    for aluno in lista:
        if aluno["Nota"] < menor:
            menor = aluno["Nota"]
    return menor

def aprovacao(lista):
    aprovados = 0
    reprovados = 0
    for nota in lista:
        if nota["Nota"] >= 7:
            aprovados += 1
        else:
            reprovados += 1
    
    porcentAprovados = aprovados / (len(lista))
    return porcentAprovados

lista = []
sn = 1
i = 1

while sn == 1:
    nome = input(f"Digite o nome do aluno {i}: ")
    while True:
        nota = float(input(f"Digite a nota do aluno {nome}: "))
        if 0 <= nota <= 10:
            break
        else:
            print("Nota inválida! Digite um valor entre 0 e 10.")
    cadastrarAluno(lista, nome, nota)
    sn = int(input("Digite 1 para cadastrar outro aluno ou 0 para parar: "))
    i += 1


print("\n### Lista de alunos cadastrados ###")
for aluno in lista:
    if aluno["Nota"] >= 7:
        print(f"{aluno['Nome']} - Nota: {aluno['Nota']} - Situação: Aprovado")
    else:
        print(f"{aluno['Nome']} - Nota: {aluno['Nota']} - Situação: Reprovado")

print("\n### Estatísticas ###")
print("Nº de alunos cadastrados:", len(lista))
print("Média geral:", media(lista))
print("Maior nota:", maior_nota(lista))
print("Menor nota:", menor_nota(lista))
print("Porcentagem de aprovados: ", aprovacao(lista))

