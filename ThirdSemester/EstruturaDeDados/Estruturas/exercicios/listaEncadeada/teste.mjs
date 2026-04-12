import LinkedList from "./lib/LinkedList.mjs"

const lista = new LinkedList()

// Inserções básicas
lista.insertTail(1)
lista.insertTail(2)
lista.insertTail(3)

// Remoções
lista.remove(1)      // remove 2
lista.removeHead()   // remove 1

// Teste do histórico
console.log("Histórico de remoções: ", lista.history())

// Exercício 02

const list = new LinkedList()

list.insertTail(1)
list.insertTail(2)
list.insertTail(3)

console.log("Antes:")
console.log(list.print())

list.reverse()

console.log("Depois:")
console.log(list.print())

// Exercício 03

const listagem = new LinkedList()

listagem.insertTail(10)
listagem.insertTail(20)
listagem.insertTail(10)
listagem.insertTail(30)
listagem.insertTail(10)

console.log(listagem.print())

console.log("Ocorrências de 10:", listagem.countOccurrences(10))
console.log("Ocorrências de 20:", listagem.countOccurrences(20))
console.log("Ocorrências de 99:", listagem.countOccurrences(99))

// Exercício 04

const listaRemove = new LinkedList()

listaRemove.insertTail(10)
listaRemove.insertTail(20)
listaRemove.insertTail(10)
listaRemove.insertTail(30)
listaRemove.insertTail(10)

console.log("Antes:")
console.log(listaRemove.print())

listaRemove.removeAll(10)

console.log("Depois:")
console.log(listaRemove.print())

// Exercício 05

const listaArray = new LinkedList()

listaArray.insertTail(5)
listaArray.insertTail(10)
listaArray.insertTail(15)

console.log(listaArray.print())

const array = listaArray.toArray()

console.log("Array:", array)