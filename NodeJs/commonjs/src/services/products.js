function getFullName(codeId, productName) {
    return `${codeId} -- ${productName}`
}

// "module" é o próprio arquivo JS

module.exports = {
    getFullName
}