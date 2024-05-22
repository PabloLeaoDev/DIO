const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

// o async/await nada mais é do que uma maneira de abstrair os callbacks da estrutura then/catch/finally

async function retornarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const convert = arquivo.toString('utf8')
        console.log(convert)
    } catch(error) {
        console.error(error)
    } finally {
        console.log('Finalizou!')
    }
}

retornarArquivo()