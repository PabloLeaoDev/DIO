import chalk from "chalk"
import handle from "./handle.js"

function createPassword() {
    console.log(chalk.green.italic('Criando sua senha...'))
    const password = handle()
    console.log(chalk.green('Senha criada abaixo:'))
    console.log(password)
}

export default createPassword