export default class Deque {

    #data // vetor privado

    constructor() {
        this.#data = []
    }

    // ------------------------------------------------ métodos ------------------------------------------------------------

    // método para inserção no início da estrutura
    insertFront(value){
        this.#data.unshift(value);
    }

    // método para inserção no final da estrutura
    insertBack(value){
        this.#data.push(value);
    }

    // metodo para remoção de valor no inicio da estrutura
    removeFront(){
        return this.#data.shift();
    }

    // metodo para remoção no final da estrutura
    removeBack(){
        return this.#data.pop();
    }

    // metodo para consultar o inicio da estrutura
    peekFront(){
        return this.#data[0];
    }

    // metodo para consultar o final da estrutura
    peekBack(){
        return this.#data[this.#data.length - 1];
    }

    get isEmpty(){
        return this.#data.length === 0 ? "Está vazio!" : "Não está vazio!"
    }

    // metodo de impressão do deuue(para efeitos de depuração)
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