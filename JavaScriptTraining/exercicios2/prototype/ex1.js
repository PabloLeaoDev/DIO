const pessoa = {
    idade: 18
}

const pablo = {
    nome: 'Pablo',
    idade: 19,
    __proto__: pessoa
}

console.log(pablo.idade)