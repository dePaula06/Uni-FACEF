class Node {

    constructor(val) {
        this.prev = null;
        this.data = val;
        this.next = null
    }

}

export default class DoublyLinkedList {

    #head
    #tail
    #count

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    get isEmpty() {
        this.#count === 0;
    }

    get count() {
        return this.#count;
    }

    // Método privado - encontra um nodo por sua posição
    #findNode(pos) {
        let node;
        // nodo encontra-se na primeira metade da lista
        if (pos < this.#count / 2) {
            node = this.#head
            for (let i = 0; i < pos; i++) {
                node = node.next;
            }
        }// nodo encontra-se na segunda metade da lista 
        else {
            node = this.#tail
            for (let i = (this.#count - 1); i > pos; i--) {
                node = node.prev
            }
        }

        return node
    }

    // Método para inserir em qualquer posição
    insert(pos, val) {

        let inserted = new Node(val);

        // 1º caso: lista vazia
        if (this.isEmpty) {

            this.#head = inserted;
            this.#tail = inserted;

        }

        //2º caso: inserção na primeira posição
        else if (pos === 0) {

            inserted.next = this.#head;
            this.#head.prev = inserted;
            this.#head = inserted;

        }

        // 3º caso: inserção na última posição
        else if (pos >= this.#count) {

            inserted.prev = this.#tail;
            this.#tail.next = inserted;
            this.#tail = inserted;

        }

        // 4º caso: inserção em posição intermediária
        else {

            let nodePos = this.#findNode(pos);
            let before = nodePos.prev

            before.next = inserted
            inserted.prev = before
            inserted.next = nodePos
            nodePos.prev = inserted

        }

        this.#count++

    }

    // metodo de atalho para inserção na primeira posição
    insertHead(val) {
        this.insert(0, val)
    }

    // metodo de atalho para inserção na última posição
    insertTail(val) {
        this.insert(this.#count, val)
    }

    // metodo para remover um nodo da lista
    remove(pos) {
        // 1º caso: lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }

        // 2º caso: remoção do primeiro nodo
        let removed

        if (pos === 0) {

            removed = this.#head
            this.#head = removed.next


            if (this.#head) {
                this.#head.prev = null
            }

            if (this.#count === 1) {
                this.#tail = null
            }
        }

        // 3º caso: remoção do último nodo
        else if( pos === this.#count - 1){

            removed = this.#tail
            this.#tail = removed.prev

            if(this.#tail){
                this.#tail.next = null
            }

            if(this.#count === 1){
                this.#head = null
            }

        }

        // 4º caso: remoção em posição intermediária
        else {

            removed = this.#findNode(pos)
            let before = removed.prev
            let after = removed.next

            before.next = after
            after.prev = before

        }

        this.#count--

        return removed.data
    }

    // metodo de atalho da primeira posição
    removeHead(){

        return this.remove(0)

    }

    // metodo de atalho da última posição
    removeTail(){

        return this.remove(this.#count - 1)
        
    }

    peek(pos){

        // lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }

        const node = this.#findNode(pos);
        return node.data

    }

    peekHead(){
        return this.peek(0)
    }

    peekTail(){
        return this.peek(this.#count - 1)
    }

}