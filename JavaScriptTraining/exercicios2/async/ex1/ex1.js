const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')
const lerArquivo = fs.promises.readFile(filePath)

lerArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((text) => text.split('\n').slice(1))
    .then((noHeaderText) => noHeaderText.map((line) => {
        const [nome, feito] = line.split(';')
        return {
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((objeto) => console.log(objeto))
    .catch((error) => console.error(error))