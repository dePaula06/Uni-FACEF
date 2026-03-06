// Lista de compras

import Deque from "./lib/Deque.mjs";

let listaCompras = new Deque();

console.log(listaCompras.print());
console.log("A lista de compras está vazia?\n" + listaCompras.isEmpty);

// Produtos alimentícios -> início
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
listaCompras.insertFront("Sal")
listaCompras.insertFront("Açucar")
listaCompras.insertFront("Café")
listaCompras.insertFront("Leite")
listaCompras.insertFront("Bolacha de maizena")
listaCompras.insertFront("Chocolate")

// Produtos de limpeza/higiene -> final
listaCompras.insertBack("Sabão em pó")
listaCompras.insertBack("Sabão em barra")
listaCompras.insertBack("Desinfetante")
listaCompras.insertBack("Detergente")
listaCompras.insertBack("Desedorante")
listaCompras.insertBack("Água sanitária")
listaCompras.insertBack("Querosene")

console.log(listaCompras.print());

// Mais produtos...
listaCompras.insertFront("Carne")
listaCompras.insertFront("Batata")
listaCompras.insertFront("Tomate")
listaCompras.insertBack("Amaciante")
listaCompras.insertBack("Kit Shampoo/Condicionador")

console.log(listaCompras.print());

// Remoção de itens

listaCompras.removeFront()
listaCompras.removeBack()
listaCompras.removeFront()
listaCompras.removeBack()
listaCompras.removeFront()
listaCompras.removeBack()

console.log(listaCompras.print());

// próximos...
let frente = listaCompras.peekFront()
let ultimo = listaCompras.peekBack()

console.log("Frente: " + frente + "\n" + "Último: " + ultimo);
