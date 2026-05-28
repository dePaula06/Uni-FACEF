import  Queue from "../../lib/Queue.mjs";

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
    G: [],
    H: []
}

function bfs(grafo, inicio) {

    // O Set() ´uma estrutura de dados nativa do JS (como se fosse um array), as com duas regras: 
    //    - Não permite elementos duplicados
    //    - Busca instantaneamente
    const visitados = new Set(); 

    const fila = new Queue();

    fila.enqueue(inicio)

    // criar um laço que vai rodar, enquanto a fila não estiver vazia
    while(fila.isEmpty){

        // remove o primeiro elemento da fila (o mais antigo) e guarda na variável 'no'
        const no = fila.dequeue()

        if(visitados.has(no)) {
            console.log(no);

            visitados.add(no)
            
        }

    }

}

bfs(grafo, "A")