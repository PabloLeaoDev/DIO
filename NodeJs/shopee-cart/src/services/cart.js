async function addItem(userCart, item) {
    userCart.push(item)
}

async function delItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)
    if (index !== -1) {
        userCart.splice(index, 1)
    } 
}

async function remItem(userCart, name) {
    const index = userCart.findIndex((i) => i.name === name)
    if (index === -1) {
        console.log('Item não encontrado!')
    } else if (userCart[index].quantify > 1) {
        userCart[index].quantify -= 1
        const newSubTotal = userCart[index].subtotal -= userCart[index].price
        userCart[index].subtotal = parseFloat((newSubTotal).toFixed(2))
    } else {
        delItem(userCart, name)
    }
}

async function calcTotal(userCart) {
    console.log('Shopee Cart Total is: ')
    console.log(`R$${userCart.reduce((total, item) => total + item.subtotal, 0)}`) 
}

async function displayCart(userCart) {
    console.log('\nShopee Cart List:')
    console.log('-----------------------------------------------------------------------')
    userCart.forEach((properties, i) => {
        console.log(`${i + 1}. ${properties.name} - R$${properties.price} | Quantidade: ${properties.quantify}x | Subtotal = ${properties.subtotal}`)
    })
    console.log('-----------------------------------------------------------------------')
}

export {
    addItem,
    delItem,
    remItem,
    displayCart,
    calcTotal
}