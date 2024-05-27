async function createItem(name, price, quantify) {
    return {
        name,
        price,
        quantify,
        subtotal: price * quantify
    }
}

export default createItem;