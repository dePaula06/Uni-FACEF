## Exercício 03

## Função para calcular a moda
def calcularModa(vetor):
    maior_frequencia = 0
    moda = None
    empate = False  

    for i in range(len(vetor)):
        contador = 0

        
        for j in range(len(vetor)):
            if vetor[j] == vetor[i]:
                contador += 1

        
        if contador > maior_frequencia:
            maior_frequencia = contador
            moda = vetor[i]
            empate = False  

        
        elif contador == maior_frequencia and vetor[i] != moda:
            empate = True

    
    if maior_frequencia == 1 or empate:
        return None
    else:
        return moda


## Programa principal
vetor = []

print("### Cálculo da Moda ###")
qtd = int(input("Quantos números deseja inserir? "))

# Lendo valores com validação (somente positivos)
for i in range(qtd):
    while True:
        num = int(input(f"Digite o {i+1}º número positivo: "))
        if num > 0:
            vetor.append(num)
            break
        else:
            print("Número inválido! Digite apenas valores positivos.")

# Mostrando os valores
print("\nVetor lido:", vetor)

# Calculando moda
resultado = calcularModa(vetor)

if resultado is None:
    print("Não existe moda (houve empate ou todos aparecem uma vez).")
else:
    print(f"A moda do vetor é: {resultado}")
