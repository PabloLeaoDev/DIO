const priceFuel = 6;
const kmSpent = 10;
let kmDistance = 100;

const totalCost = kmDistance / kmSpent * priceFuel;

console.log(`Você gastará R$${totalCost.toFixed(2)} com combustível para fazer essa viagem.`);