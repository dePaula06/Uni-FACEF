export default class Deque {

    #data
    tamanho

    constructor(tamanho) {
        this.#data = []
        this.tamanho = tamanho
    }

    insertFront(val) {
        if (this.#data.length >= this.tamanho) {
            return console.log(`Deque cheio [${this.tamanho}]`)
        }

        if (this.#data.includes(val)) {
            return console.log("Valor já existe no deque")
        }

        this.#data.unshift(val)
    }

    insertBack(val) {
        if (this.#data.length >= this.tamanho) {
            return console.log(`Deque cheio [${this.tamanho}]`)
        }

        if (this.#data.includes(val)) {
            return console.log("Valor já existe no deque")
        }

        this.#data.push(val)
    }

    removeFront() {
        return this.#data.shift()
    }

    removeBack() {
        return this.#data.pop()
    }

    peekFront() {
        return this.#data[0]
    }

    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    get isEmpty() {
        return this.#data.length === 0
    }

    print() {
        let output = '[ '
        for(let i = 0; i < this.#data.length; i++) {
            if(output !== '[ ') output += ', '
            output += `(${i}): ${this.#data[i]}`
        }
        return output + ' ]'
    }
}