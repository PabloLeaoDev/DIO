const priceEtanol = 4;
const priceGas = 6;
let isGasoline = false;
const kmSpent = 10;
let kmDistance = 100;

if (isGasoline === true) {
    var totalCost = kmDistance / kmSpent * priceGas;
} else {
    var totalCost = kmDistance / kmSpent * priceEtanol;
}

console.log(`Você gastará R$${totalCost.toFixed(2)} com combustível para fazer essa viagem.`);