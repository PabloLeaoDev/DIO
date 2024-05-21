class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}
const lista = [new Pessoa('Pablo'), new Pessoa('Siclano'), new Pessoa('Fulano')]
const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function toForEach() {
    lista1.forEach((value, i, element) => {
        console.log(`Valor: ${value} Index: ${i} Elemento: ${element}`)
    });
    
    console.log('')
    // Análogo ao código abaixo
    
    for(let i = 0; i < lista1.length; i++) {
        const value = lista1[i]
        console.log(`Valor1: ${value} Index1: ${i} Elemento1: ${lista1}`)
    }
    
    console.log('')
    // ou, a forma mais utilizada
    
    lista1.forEach((value) => {
        console.log(value)
    })
}

function toFilter() {
    // cria uma lista nova filtrada com base na primeira, sem alterar esta

    const listaNumPares = lista1.filter((element) => {
        return (element % 2 === 0)
    })

    console.log(listaNumPares)
}

function toMap() {
    const listaNomes = lista.map((element) => (element.name))
    console.log(listaNomes)
}

function toReduce() {
    const somatorio = lista1.reduce((previous, current) => {
        console.log(previous, current)
        return previous + current
    }, 0)
    console.log(somatorio)
}

function toJoin() {
    let list = [{nome: 'Pablo'}, {nome: 'Fulano'}, {nome: 'Siclano'}, {nome: 'Paulo'}]
    console.log(list.map((e) => e.nome)
        .filter((e) => e.startsWith('P'))
        .join('; '))
}

toJoin()