import BinarySearchTree from "../lib/BinarySearchTree.mjs";

const arvore = new BinarySearchTree()

arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)
arvore.insert(1)
arvore.insert(80)
arvore.insert(14)
arvore.insert(19)
arvore.insert(37)
arvore.insert(23)
arvore.insert(21)
arvore.insert(25)
arvore.insert(51)
arvore.insert(64)

let percursoIn = []
let percursoPre = []
let percursoPos = []

// Percurso em ordem
arvore.inOrderTranversal(val => percursoIn.push(val));
console.log('Percurso em ordem: ', percursoIn);

// Percurso pré ordem
arvore.preOrderTranversal(val => percursoPre.push(val));
console.log('Percurso pré ordem: ', percursoPre);

// Percurso pós ordem
arvore.postOrderTranversal(val => percursoPos.push(val));
console.log('Percurso pós ordem: ', percursoPos);

// Testes em ordem
let percursoRemove = []
arvore.inOrderTranversal(val => percursoRemove.push(val))
console.log('Antes das remoções: ', percursoRemove);

// Remoção de um nodo de grau 0
arvore.remove(64)
percursoRemove = []
arvore.inOrderTranversal(val => percursoRemove.push(val))
console.log('Após remoção do 64: ', percursoRemove);

// Remoção de um nodo de grau 1
arvore.remove(1)
percursoRemove = []
arvore.inOrderTranversal(val => percursoRemove.push(val))
console.log('Após remoção do 1: ', percursoRemove);

// Remoção de um nodo de grau 2
arvore.remove(15)
percursoRemove = []
arvore.inOrderTranversal(val => percursoRemove.push(val))
console.log('Após remoção do 15: ', percursoRemove);

// Remoção da raiz
arvore.remove(48)
percursoRemove = []
arvore.inOrderTranversal(val => percursoRemove.push(val))
console.log('Após remoção do 48: ', percursoRemove);