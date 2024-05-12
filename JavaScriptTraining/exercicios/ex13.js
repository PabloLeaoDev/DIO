const {gets, list} = require('../gets-print/main');

let maiorPar = 0;
let menorImpar = 999;

for (let index = 0; index < list.length; index++) {
    let num = list[index];
    const isPair = num % 2 === 0;
    const isOdd = num % 2 === 1;
    if (isPair && num > maiorPar) {
        maiorPar = num;
    } else if (isOdd && num < menorImpar) {
        menorImpar = num;
    }
}

console.log(`O maior número par é ${maiorPar}\nO menor número ímpar é ${menorImpar}`);