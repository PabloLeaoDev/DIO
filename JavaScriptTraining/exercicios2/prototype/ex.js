// funções construtoras e orientação a protótipo
// Abaixo segue a sintaxe padrão e utilizada antigamente no JS

function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

let pablo = new Pessoa('Pablo', 18)
pablo.falar()

// Agora, a nova sintaxe análoga a acima, criada para padronizar com as outras linguagens. No final das contas, é a mesma orientação a protótipo

class Pessoa1 {
    constructor(nome, idade) {
        this.nome = nome,
        this.idade = idade
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`)
    }
}

let pedro = new Pessoa1('Pedro', 14)
pedro.falar()