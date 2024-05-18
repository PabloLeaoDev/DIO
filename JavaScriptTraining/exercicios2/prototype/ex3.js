function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

const pablo = {
    genero: 'Masculino'
}

// O método "call", diferente do "new", não passa o prototype adiante
// O "call" pode usar um objeto já existente como parâmetro e enriquecê-lo com os valores da função construtora

Pessoa.call(pablo, 'Pablo', 18)
console.log(pablo)