import { devArea, client } from './utils/config.js'
import * as db from './utils/database.js' // importa tudo

function main() {
    console.log(devArea.production)
    console.log(client.device)
    db.connectToDb('MySQL')
    db.disconnectToDb()
}

main()
