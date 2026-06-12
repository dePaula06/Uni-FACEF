import Queue from "./lib/Queue.mjs"

const grafo = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: [],
}

// implementação da busca em largura (BFS)

function bfs(grafo, inicio){

    //O set é uma estrutura de dados nativa do JS (como se fosse um array), mas com duas regras:
    //Não permite elementos duplicados: Se você tentar adicionar o valor "A" 3 vezes, ele guarda apenas uma.
    //Busca instantânea: o método .has() desconbre se um elemento está lá desntro muito mais rápido do que fazer um indexOf ou includes
    const visitados = new Set();

    //Cria uma nova instância da fila em LIB
    const fila = new Queue();

    //insere o nó de partida (nó inicial) no final da fila
    fila.enqueue(inicio)

    //criar um laço que vai rodar enquanto a fila NÃO estiver vazia 
    while(!fila.isEmpty){
        // remove o primeiro elemento da fila (o mais antigo) e guarda na variável 'no'
        const no = fila.dequeue()

        //o método .has() checa se o nó atula NÂO (!) está dentro do concjunto de visitados
        if(!visitados.has(no)){
            
            //imprime o nó no console
            console.log(no)

            // método de adicionar o nó atual no conjunto para marcar que ele já foi processado
            visitados.add(no)
            
            //percorre cada um dos vizinhos do nó atual da lista de adjacência do grafo
            for (const vizinho of grafo[no]){
                //checa se o vizinho em questão ainda não foi visitado
                if(!visitados.has(vizinho)){
                    //se não foi visitado, coloca esse vizinho no final da fila para ser processado depois
                    fila.enqueue(vizinho)
                }
            }
        }
    }
}


function obterDistanciasEBFS(grafo, inicio) {
const fila = new Queue();
const visitados = new Set();

const distancias = {};
const anterior = {};
const caminhos = {};

fila.enqueue(inicio);
visitados.add(inicio);

distancias[inicio] = 0;
anterior[inicio] = null;

while (!fila.isEmpty) {
    const atual = fila.dequeue();

    for (const vizinho of grafo[atual]) {
        if (!visitados.has(vizinho)) {
            visitados.add(vizinho);

            distancias[vizinho] = distancias[atual] + 1;
            anterior[vizinho] = atual;

            fila.enqueue(vizinho);
        }
    }
}

// Reconstrução dos caminhos
for (const vertice in distancias) {
    const caminho = [];
    let atual = vertice;

    while (atual !== null) {
        caminho.unshift(atual);
        atual = anterior[atual];
    }

    caminhos[vertice] = caminho;
}

return {
    distancias,
    caminhos
};
}

function contarComponentesConexos(grafo) {
        const visitados = new Set();
    let componentes = 0;

    for (const vertice in grafo) {
        
        if (!visitados.has(vertice)) {
            componentes++;
            
            const fila = new Queue();
            
            fila.enqueue(vertice);
            visitados.add(vertice);
            
            while (!fila.isEmpty) {
                const atual = fila.dequeue();
                
                for (const vizinho of grafo[atual]) {
                    if (!visitados.has(vizinho)) {
                        visitados.add(vizinho);
                        fila.enqueue(vizinho);
                    }
                }
            }
        }
    }
    
    return componentes;
}

bfs(grafo, "A")
console.log(obterDistanciasEBFS(grafo, "A"));
console.log(contarComponentesConexos(grafo));