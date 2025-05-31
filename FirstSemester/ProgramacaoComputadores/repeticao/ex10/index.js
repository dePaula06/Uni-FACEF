/*

 Faça um programa que receba dez números, calcule e mostre a soma dos números pares e a soma dos números primos.

 */

function ex10() {
  let i;
  let n;
  let somaPares;
  let somaPrimos;
  let k;

  somaPares = 0;
  somaPrimos = 0;

  for (i = 0; i < 10; i++) {
    do {
      n = prompt(`Digite um número inteiro positivo: `);
      n = Number(n);
    } while (n < 0);

    if (n % 2 == 0) {
      somaPares += n;
    }

    // Verifica se é primo
    if (n > 1) {
      let divisores = 0;
      for (let k = 1; k <= n; k++) {
        if (n % k == 0) {
          divisores++;
        }
      }
      if (divisores == 2) {
        somaPrimos += n;
      }
    }
  }

  alert(
    `A soma dos números pares é: ${somaPares}\n` +
      `E dos números primos é: ${somaPrimos}`
  );
}
