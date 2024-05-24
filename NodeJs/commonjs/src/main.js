const { getFullName, getProductLabel } = require('./services/products.js')
const config = require('./services/config.js')
const db = require('./services/database.js')

function main() {
    console.log(getFullName(123456, 'Teste'))
    console.log(getProductLabel('Teste1'))
    console.log(config.devArea.production)
    console.log(config.client.device)
    db.connectToDb('MySQL')
    db.disconnectToDb()
}

main()