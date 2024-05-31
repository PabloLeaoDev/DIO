import dotenv from "dotenv"

dotenv.config()

function permittedChars() {
    let permitted = []

    if (process.env.UPPERCASE_LETTERS === 'true') {
        permitted.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }
    if (process.env.LOWERCASE_LETTERS === 'true') {
        permitted.push(...'abcdefghijklmnopqrstuvwxyz')
    }
    if (process.env.NUMBERS === 'true') {
        permitted.push(...'0123456789')
    }
    if (process.env.SPECIAL_CHARACTERS === 'true') {
        permitted.push(...'@!#$&*¬£¢§()-_©~^<>')
    }
    return permitted
}

function handle() {
    let char = permittedChars()
    let password = ''
    let passwordLength = parseInt(process.env.PASSWORD_LENGTH, 10) || 8

    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * char.length)
        let pickedChar = char[index]
        password += pickedChar
    }

    return password
}

export default handle