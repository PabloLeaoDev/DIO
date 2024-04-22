const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function balance() {
    return new Promise((resolve, reject) => {
        rl.question('\nDigite a quantidade de vitórias: ', (wins) => {
            let nWins = Number(wins);
            totalLosses().then((nLosses) => {
                let minus = nWins - nLosses;
                rl.close();
                resolve(minus);
            }).catch((error) => {
                reject(error);
            });
        })
    });
}

function totalLosses() {
    return new Promise((resolve, reject) => {
        rl.question('Digite a quantidade de derrotas: ', (losses) => {
            let nLosses = Number(losses);
            resolve(nLosses);
        });
    });
}

async function main() {
    try {
        let values = await balance();
        switch (true) {
            case values < 10:
                console.log(`\nO Herói tem de saldo de ${values} está no nível de Ferro.`);
                break;
            case values > 10 && values <= 20:
                console.log(`\nO Herói tem de saldo de ${values} está no nível de Bronze.`);
                break;
            case values > 20 && values <= 50:
                console.log(`\nO Herói tem de saldo de ${values} está no nível de Prata.`);
                break;
            case values > 50 && values <= 90:
                console.log(`\nO Herói tem de saldo de ${values} está no nível de Ouro.`);
                break;
            case values > 90 && values <= 100:
                console.log(`\nO Herói tem de saldo de ${values} está no nível de Platina.`);
                break;
            case values > 100:
                console.log(`\nO Herói tem de saldo de ${values} está no nível de Ascendente.`);
                break;
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    } finally {
        rl.close();
    }
}

main();