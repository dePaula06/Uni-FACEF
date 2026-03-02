## Exercício 01

def descontoBase(valorCompra):
    if valorCompra > 500:
        desconto = valorCompra * 0.15
    elif valorCompra < 500 and valorCompra > 200:
        desconto = valorCompra * 0.1
    else:
        desconto = 0

    valorBase = valorCompra -  desconto
    return valorBase

def descontoAdicional(valorBase, idade):
    if idade < 25:
        descontoAdicional = valorBase * 0.05
    elif idade >= 60:
        descontoAdicional = valorBase * 0.07
    else:
        descontoAdicional = 0
    
    valorFinal = valorBase - descontoAdicional
    return valorFinal

idadeCliente = int(input("Digite a sua idade: "))
valorCompra = float(input("Digite o valor total da compra: "))

valorBase = descontoBase(valorCompra)
descontoValor = valorCompra - valorBase

valorFinal = descontoAdicional(valorBase, idadeCliente)
descontoFinal = valorBase - valorFinal

print("O valor do desconto base é: ", descontoValor)

if descontoFinal > 0:
    print("O valor  do desconto adicional foi: ", descontoFinal)
else:
    print("O descontto por idade não foi aplicável")

print("Valor total a ser pago: ", valorFinal)

