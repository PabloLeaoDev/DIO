import prompt from "prompt"
import dotenv from "dotenv"
import mainPrompt from "./prompts/prompt-main.js"
import { createQRCode } from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js"

dotenv.config()

async function main() {
    prompt.get(mainPrompt, (err, choose) => {
        if (choose.select == 1) createQRCode()
        else if (choose.select == 2) createPassword()
    })

    prompt.start()
}

main()