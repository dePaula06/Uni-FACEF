import Queue from "./lib/Queue.mjs"

let fila = new Queue()
console.log(fila.print());
console.log("Está vazia?", fila.isEmpty);

// inserções na fila
fila.enqueue("Pedro")
fila.enqueue("André")
fila.enqueue("Tiagão")
fila.enqueue("João")
fila.enqueue("Tiaguinho")
fila.enqueue("Tadeu")
fila.enqueue("Filipe")
fila.enqueue("Natanael")
fila.enqueue("Simão")
fila.enqueue("Mateus")
fila.enqueue("Tomé")
fila.enqueue("Matias")

console.log(fila.print());

// Quem será atendido
let proximo = fila.peek()
console.log({proximo});

// Quem será atendido
let atendido = fila.dequeue()
console.log({atendido});
console.log(fila.print());