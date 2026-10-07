//Classe que representa a unidade de informação da árvore binária de busca
class Node {
  constructor(val) {
    this.data = val; // armazena a informação da árvore binária de busca
    this.left = null; // ponteiro para a subárvore esquerda
    this.right = null; // ponteiro para a subárvore direita
  }
}

//Classe que implementta a árvore binária de busca
export default class BinarySearchTree {
  #root; //raiz da árvore

  constructor() {
    this.#root = null;
  }

  //método para efetuar inserção ABB
  insert(val) {
    const inserted = new Node(val);

    //1º caso: árvore vazia
    //o primeiro nodo fica sendo a raiz da árvore
    if (this.#root === null) this.#root = inserted;
    //2º caso: inserção recursiva, percorrendo a árvore recursivamente
    else this.#insertNode(inserted, this.#root);
  }
  //método PRIVADO que insere um novo nodo na árvore
  #insertNode(inserted, root) {
    // 1º caso: valor a ser inserido é MENOR que o valor da raiz
    // inserção ocorre à ESQUERDA da raiz
    if (inserted.data < root.data) {
      // se a posição à esquerda da raiz está desocupada, faz a inserção
      if (root.left === null) {
        root.left = inserted;
        // senão, reinicia o processo de inserção recursivamente com a subárvore esquerda como raiz
      } else {
        this.#insertNode(inserted, root.left);
      }
    } else if (inserted.data > root.data) {
      // 2ºcaso: valor a ser inserido é MAIOR que o valor da raiz
      // inserção ocorre à DIREITA da raiz
      if (root.right === null) {
        root.right = inserted;
      } // senão, reinicia o processo de inserção recursivamente com a subárvore direita como raiz
      else {
        this.#insertNode(inserted, root.right);
      }
      // 3º caso: o valor a ser inserido é IGUAL ao valor da raiz
      // senão, reinicia o processo de inserção recursivamente com a subárvore esquerda como raiz
    } else {
      this.#insertNode(inserted, root.left);
    }
  }

  /*
    PERCURSOS
    Métodos que executa o percurso em ordem (in order transversal) na árvore
    Ordem do percurso:
    1º ~> percorre recursivamente em ordem a subárvore esquerda
    2º ~> visita a raiz
    3º ~> percorre recursivamente em ordem a subárvore direita
  */

    inOrderTranversal(fnCallback, root = this.#root) {
      if(root !== null) {
        this.inOrderTranversal(fnCallback, root.left) // 1º
        fnCallback(root.data)                         // 2º
        this.inOrderTranversal(fnCallback, root.right)// 3º
      }
    }

    /*
    Método que executa o percurso pré-ordem (pre-order traversal) na árvore 
    Ordem do percurso
      1º ~> visita a raiz
      2º ~> percorre recursivamente em ordem a subárvore esquerda
      3º ~> percorre recursivamente em ordem a subárvore direita
    */
      preOrderTranversal(fnCallback, root = this.#root) {
        if(root !== null) {
          fnCallback(root.data)                         // 1º
          this.inOrderTranversal(fnCallback, root.left) // 2º
          this.inOrderTranversal(fnCallback, root.right)// 3º
        }
      }

    
}
