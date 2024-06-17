interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string // propriedade opcional na interface
}

const pessoa: Pessoa = {
    nome: 'Pablo',
    idade: 18,
    profissao: 'Desenvolvedor'
}

const outraPessoa: Pessoa = {
    nome: 'Pedro',
    idade: 14
}

// há duas sintaxes para tipar arrays

// 1
const arrayPessoas: Pessoa[] = [
    pessoa, 
    outraPessoa
]

const arrayPessoas1: Array<Pessoa> = [
    pessoa, 
    outraPessoa
]