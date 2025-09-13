N = int(input("Digite o valor de N: "))
media = 0
total = 0

while total < N:
  x = int(input("Digite o valor de de x: "))
  media = media + x
  total = total + 1

media = media / N
print("media = ", media)