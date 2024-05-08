class Pessoa {
    nome;
    idade;
    nascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2024 - idade
    }

    descrever () {
        console.log(`Meu nome é ${this.nome}, minha idade é de ${this.idade} e nasci no ano de ${this.nascimento}.`)
    }
}

const pablo = new Pessoa('Pablo', 19);
const pedro = new Pessoa('Pedro', 14);

function compararIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho do que ${p2.nome}.`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho do que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade,`);
    }
}

pablo.descrever()
pedro.descrever()
compararIdade(pablo, pedro);