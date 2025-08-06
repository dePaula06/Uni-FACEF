// valores fixos

let elencoCorinthians = [
        {
            nome: "Hugo Souza",
            idade: 24,
            nCamisa: 1,
            posicao: "gol"
        },

        {
            nome: "Mateus Doneli",
            idade: 22,
            nCamisa: 32,
            posicao: "gol"
        },

        {
            nome: "Fabrizio Angileri",
            idade: 31,
            nCamisa: 26,
            posicao: "le"
        },

        {
            nome: "Matheuzinho",
            idade: 25,
            nCamisa: 2,
            posicao: "ld"
        }
];

let i

for (i = 0; i< elencoCorinthians.length; i++) {
    console.log(`Nome do jogador na posição ${i+1}: ${elencoCorinthians[i].nome}`);
    console.log(`Idade do jogador na posição ${i+1}: ${elencoCorinthians[i].idade}`);
    console.log(`Número da camisa do jogador na posição ${i+1}: ${elencoCorinthians[i].nCamisa}`);
    console.log(`Posição do jogador na posição ${i+1}: ${elencoCorinthians[i].posicao}`);
    }

// valores inseridos pelo usuário

let biblioteca = []
let livro

for (let i = 0; i < 3; i++) {
    let titulo = prompt(`Informe o título do ${i + 1}º livro: `);
    let autor = prompt(`Informe o(a) autor(a) do ${i + 1}º livro: `);
    let ano = Number(prompt(`Informe o ano do ${i + 1}º livro: `));
    let paginas = Number(prompt(`Informe a quantidade de páginas do ${i + 1}º livro: `));

     livro = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        paginas: paginas
    };

    biblioteca.push(livro);
    
}