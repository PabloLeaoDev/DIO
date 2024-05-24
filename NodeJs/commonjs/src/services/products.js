function getFullName(codeId, productName) {
    return `${codeId} -- ${productName}`
}

function getProductLabel(productName) {
    return `Product ${productName}`
}

// "module" é o próprio arquivo JS

module.exports = {
    getFullName,
    getProductLabel
}