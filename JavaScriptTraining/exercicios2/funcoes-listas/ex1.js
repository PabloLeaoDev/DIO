const pessoa = {
    nome: 'Pablo',
    idade: 18
}

function cumprimentar(prefixo) {
    console.log(`${prefixo}, ${this.nome}!`)
}

cumprimentar('Olá')
cumprimentar.apply(pessoa, ['Olá'])
cumprimentar.call(pessoa, 'Olaa')
new cumprimentar('Olá')