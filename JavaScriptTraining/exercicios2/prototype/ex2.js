const pessoa = {
    genero: 'Masculino'
}

let pablo = Object.create(pessoa)
pablo.nome = 'Pablo'
console.log(pablo)
console.log(pablo.nome)
console.log(pablo.__proto__)
console.log(pablo.genero)