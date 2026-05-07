function fatorial(n) {

    const inicio = performance.now()

    function fatorialRecursivo(num) {
        if(num === 0) return 1
        return num * fatorialRecursivo(num - 1)
    }

    const resultado = fatorialRecursivo(n)

    const fim = performance.now()

    const tempoGasto = fim - inicio

    // Memória estimada usada só pela pilha de chamadas (4 bytes por número inteiro)
    const memoriaPilhaMB = (n * 4) / (1024 * 1024)


    // Memória real usada pelo processo 
    let memoriaTotalMB = 'N/A'
    if(typeof process !== 'undefined' && process.memoryUsage){
        memoriaTotalMB = process.memoryUsage.heapUsed / 1024 / 1024
    }

    
    console.log("--- Análise de Complexidade recursiva O(n!)");
    console.log("Tamanho da entrada: ", n);
    console.log("Resultado: ", resultado);
    console.log("Tempo de execução: ", tempoGasto.toFixed(6), 'ms');
    console.log("Memória estimada da pilha de chamadas: ", memoriaPilhaMB.toFixed(2), 'MB');
    console.log("Memória total usada pelo processo: ", typeof memoriaTotalMB === 'number' ? memoriaTotalMB.toFixed(2) + ' MB' : memoriaTotalMB );
    
    
    
}

const numero = 50
fatorial(numero)