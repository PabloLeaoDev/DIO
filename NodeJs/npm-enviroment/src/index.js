import dotenv from 'dotenv'
import connectToDB from "./database/data.js"

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config()

async function main() {
    await connectToDB(process.env.USERDB, process.env.PASSWORDDB)
    console.log(process.env.USERDB)
    console.log(process.env.PASSWORDDB)
}

main()
