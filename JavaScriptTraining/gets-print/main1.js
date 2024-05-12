const readline = require('readline');

function main(text) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(`${text}`, (value) => {
            rl.close();
            resolve(value); // Resolvendo a promessa com o valor inserido
        });
    });
}

async function gets(text) {
    const input = await main(`${text}`);
    return input;
}

module.exports = { gets };