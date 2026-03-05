export default class Queue {

    #data // vetor privado

    constructor(){
        this.#data = []
    }

    // metodopara inserção na fila
    enqueue(val){
        this.#data.push(val)
    }

    // metodo para remoção na fila
    dequeue(){
        return this.#data.shift() // não é pop, pois ele pega o último valor
    }

    // metodo para consultar inicio da fila, sem remover o elemento
    peek() {
        return this.#data[0]
    }

    // a fila está vazia
    get isEmpty(){
        return this.#data.length === 0
    }

    // metodo de impressão da fila(para efeitos de depuração)
    print(){
        let output = "["
        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ",\n"
            }
            output += `(${i}): ${this.#data[i]}`
        }
        return output + "]"
    }

}