// Exercício 01

import Queue from "./lib/Queue.mjs"

const fila = new Queue()

fila.enqueue("Cliente 1")
fila.enqueue("Cliente 2")
fila.dequeue()
fila.enqueue("Cliente 3")
fila.dequeue()


console.log("Número de operações realizadas: ", fila.getOperationCount()) 

// Exercício 02
import Stack from "./lib/Stack.mjs"

const pilha = new Stack(10)

pilha.push("Google")
pilha.push("YouTube")
pilha.push("GitHub")

pilha.pop()
pilha.pop()


console.log(pilha.history()) 

// Exercício 03
import Deque from "./lib/Deque.mjs"

const deque = new Deque(5)

deque.insertBack(1)
deque.insertBack(2)
deque.insertFront(0)
deque.insertBack(3)
deque.insertBack(4)

console.log(deque.print())

deque.insertBack(5) 

// Exercício 04

const pilha2 = new Stack(3)

pilha2.push("Escreveu A")
pilha2.push("Escreveu B")
pilha2.push("Escreveu C")

pilha2.push("Escreveu D") // erro (cheia)

pilha2.pop() // desfaz C
pilha2.pop() // desfaz B

console.log(pilha2.history())

// Exercício 05

const carrinho = new Deque()

carrinho.insertBack("Arroz")
carrinho.insertBack("Feijão")
carrinho.insertFront("Macarrão")

carrinho.insertBack("Arroz")

console.log(carrinho.print())