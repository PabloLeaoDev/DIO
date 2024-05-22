const fs = require('fs').promises
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

// o async/await nada mais é do que uma maneira de abstrair os callbacks da estrutura then/catch/finally

async function retornarArquivo() {
    try {
        const arquivo = await fs.readFile(filePath)
        const convert = arquivo.toString('utf8')
        const noHeaderText = convert.split('\n').slice(1)
        const obj = noHeaderText.map((linhas) => {
            let linha = linhas.split(';')
            const [name, maked] = linha
            return {
                name,
                maked: maked.trim() === 'true'
            }
        })
        console.log(obj)
    } catch(error) {
        console.error(error)
    } finally {
        console.log('Finalizou!')
    }
}

retornarArquivo()