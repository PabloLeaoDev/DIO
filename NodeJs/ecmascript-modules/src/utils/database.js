export const connectToDb = (dataName) => {
    console.log(`Se conectando ao banco: ${dataName}`);
}

export const disconnectToDb = function () {
    console.log(`Desconectando do banco...`);
}

// export { connectToDb, disconnectToDb }