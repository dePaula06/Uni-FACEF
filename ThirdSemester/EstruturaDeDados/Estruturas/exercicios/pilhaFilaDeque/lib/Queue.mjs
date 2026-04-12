export default class Queue {

    #data
    #operationCount = 0

    constructor() {
        this.#data = []
    }

    enqueue(val) {
        this.#data.push(val)
        this.#operationCount++
    }

    dequeue() {
        this.#operationCount++
        return this.#data.shift()
    }

    getOperationCount() {
        return this.#operationCount
    }

    peek() {
        return this.#data[0]
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