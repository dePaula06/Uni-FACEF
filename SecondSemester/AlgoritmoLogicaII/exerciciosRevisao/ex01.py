# Gere uma matriz de 5x5 e calcule por função:
    # a) Soma escalar dos elementos
    # b) Função que multiplique por 3 os valores pares da matriz
    # c) Funções que retorne maior valor da matriz

def gerarMatriz():
    matriz = []
    for i in range(5):
        row = []
        for j in range(5):
            x = (i+1) * (j+1)
            row.append(x)
        matriz.append(row)
    
    return matriz

def mostrarMatriz(m):
    print("Matriz gerada: \n")
    for linha in m:
        print(linha)

def somarMatriz(m):
    soma = 0
    for linha in m:
        for elem in linha:
            soma = soma + elem
    
    return soma

def multPares(m):
    for i in range(len(m)):
        for j in range(len(m[i])):
            if m[i][j] % 2 == 0:
                m[i][j] = m[i][j] * 3

def maiorValor(m):
    maior = m[0][0]
    for i in range(len(m)):
        for j in range(len(m[i])):
            if m[i][j] > maior:
                maior = m[i][j]
    return maior


matriz = gerarMatriz()
mostrarMatriz(matriz)

soma = somarMatriz(matriz)
print("\nSoma Escalar = ", soma, "\n")

multPares(matriz)
mostrarMatriz(matriz)

maiorValor = maiorValor(matriz)
print("Maior valor = ", maiorValor)