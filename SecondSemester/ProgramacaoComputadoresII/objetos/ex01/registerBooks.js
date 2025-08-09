/*

Exercício – Cadastro de Livros e Filtro por Páginas

Crie um programa em JavaScript que:

    1. Leia os dados de 5 livros digitados pelo usuário. Para cada livro, devem ser informados:
    título (string)
    autor (string)
    ano de publicação (número)
    quantidade de páginas (número)

    2. Armazene os livros em um vetor de objetos.

    3. Ao final, o programa deve:
    Exibir todos os livros com mais de 300 páginas.
    Exibir o título do livro com maior número de páginas.
    Calcular e exibir a média de páginas dos livros cadastrados.

*/
function registerBooks() {

    let library = []
    let i
    let book, title, autor, year, pages
    let mais300 = []
    let maior, maiorTitle
    let mediaPages = 0
    
    for( i = 0; i < 5; i++){

        // lendo os dados

        title = prompt(`Qual o título do ${i+1}º livro: `)
        autor = prompt(`Qual o autor do livro ${title}: `)
        year = Number(prompt(`Qual o ano de lançamento do livro ${title}: `))
        pages = Number(prompt(`Quantas páginas ele tem: `))

        book = {
            title: title,
            autor: autor,
            year: year,
            pages: pages
        };

        // armazenando em um vetor

        library.push(book);
    }

    // Armazenamento e exibição de livros com mais de 300 páginas

    for( i = 0; i < 5; i++){
        if(library[i].pages > 300){
            mais300.push(library[i])
        }
    }
    console.log(`Livros com mais de 300 páginas: ${mais300}`);

    // Processamento e exibição do título do livro com mais páginas

    maior = library[0].pages
    maiorTitle = library[0].title

    for( i = 1; i < 5; i++){
        if( maior < library[i].pages){
            maiorTitle = library[i].title
            maior = library[i].pages
        }
    }

    console.log(`O livro com o maior número de páginas é: ${maiorTitle}, com ${maior} páginas`);

    // Somando número de páginas, fazendo a média e exibindo

    for( i = 0; i < 5; i++){
        mediaPages += library[i].pages
    }

    mediaPages = mediaPages / 5

    console.log(`A média de páginas é: ${mediaPages}`);
    
    
    

}