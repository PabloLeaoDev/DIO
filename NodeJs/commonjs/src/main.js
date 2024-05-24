const products = require('./services/products.js')

function main() {
    console.log(products.getFullName(123456, 'Teste'))
}

main()