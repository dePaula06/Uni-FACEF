/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/

    import Stack from "./lib/Stack.mjs"

    let torreA = new Stack();
    let torreB = new Stack();
    let torreC = new Stack();


    torreB.push(1);
    torreB.push(2);
    torreB.push(3);
    torreB.push(4);

    console.log("=== === === ANTES === === ===")
    console.log("Torre A: " + torreA.print());
    console.log("Torre B: " + torreB.print());
    console.log("Torre C: " + torreC.print());

    // Montando a torre de Hanoi

    function mover(destino, origem) {
        destino.push(origem.pop())
    }

    mover(torreC, torreB)
    mover(torreA, torreB)
    mover(torreA, torreC)
    mover(torreB, torreA)
    mover(torreC, torreB)
    mover(torreA, torreC)
    mover(torreC, torreB)
    mover(torreB, torreA)
    mover(torreC, torreA)
    mover(torreC, torreB)
    mover(torreA, torreB)
    mover(torreA, torreC)
    mover(torreB, torreC)
    mover(torreB, torreA)
    mover(torreA, torreC)
    mover(torreC, torreB)
    mover(torreA, torreB)
    mover(torreA, torreC)

    console.log("=== === === DEPOIS === === ===");
    
    console.log("Torre A: " + torreA.print());
    console.log("Torre B: " + torreB.print());
    console.log("Torre C: " + torreC.print());    