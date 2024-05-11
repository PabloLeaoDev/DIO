// Object Destructuring
// Ex.: const { nome } = pessoa === const nome = pessoa.nome  
const {gets, print, list} = require('../gets-print/main');
let soma = 0;
for(let index = 0; index < list.length; index++) {
    let value = gets();
    soma += value;
}
let maior = 0;
for (let a in list) {
    if (list[a] > maior) {
        maior = list[a];
    }
}

print(`A soma dos valores é ${soma}.`);
print(`O maior valor é ${maior}.`);