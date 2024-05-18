const pessoa = {
    idade: 18
}

// "__proto__" se refere ao protótipo "pessoa", é equivalente à herança

const pablo = {
    nome: 'Pablo',
    idade: 20,
    __proto__: pessoa
}

console.log(pablo.idade)