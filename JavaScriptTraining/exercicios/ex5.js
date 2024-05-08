function menu() {
    console.log('------------------------------------------');
    console.log('| Formas de Pagamento:                   |');
    console.log('|  1. Débito                             |');
    console.log('|  2. Dinheiro ou PIX                    |');
    console.log('|  3. Parcelado em duas vezes sem juros  |');
    console.log('|  4. Parcelado em três vezes ou mais    |');
    console.log('------------------------------------------');
}

function aplicarDesconto(forma, preco) {
    switch (forma) {
    case 1: // Débito
        console.log(`Você recebeu 10% de desconto: o valor final do produto é R$${preco * 0.9}.`);
        break;
    case 2: // Dinheiro ou PIX
        console.log(`Você recebeu 15% de desconto: o valor final do produto é R$${preco * 0.85}.`);
        break;
    case 3: // Parcelado em duas vezes sem juros
        console.log(`O valor final do produto é R$${preco}.`);
        break;
    case 4: // Parcelado em três vezes ou mais
        console.log(`Devido ao juros de 10%, o valor final do produto é R$${preco * 1.1}.`);
        break;
    }
}

// função MAIN auto-invocada

(function () {
    let preco = 100;
    let forma = 1;
    menu()
    aplicarDesconto(forma, preco)
})()