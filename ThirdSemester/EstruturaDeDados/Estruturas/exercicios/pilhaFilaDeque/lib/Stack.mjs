/*
    ESTRUTURA DE DADOS PILHA

    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/
export default class Stack {

    #data       // Vetor privado
    tamanho

    constructor(tamanho) {
        this.#data = []     // Vetor vazio
        this.tamanho = tamanho 
    }

    #historyData =  []   // variável para armazenar dados removidos

    // Método para inserção no vetor
    push(val) {
        if(this.#data.length < this.tamanho){
            this.#data.push(val)
        } else{
            console.log(`Pilha cheia [${this.tamanho}]. Não é possível inserir.`);      
        }
    }

    // Método para remoção do vetor
    pop() {
        if (this.isEmpty) return null

        const removed = this.#data.pop()
        this.#historyData.push(removed)
        return removed
    }

     history(){
        return this.#historyData
     }

    // Método para consultar o topo (última posição) da pilha
    // sem remover o elemento
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // Getter para informar se a pilha está ou não vazia
    // (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data) //O método JSON.stringify() converte valores em javascript para uma String JSON.
    }
}

////////////////////////////////////////////////////////////////