// exports default

exports.connectToDb = (dataName) => {
    console.log(`Se conectando ao banco: ${dataName}`);
}

exports.disconnectToDb = function () {
    console.log(`Desconectando do banco...`);
}