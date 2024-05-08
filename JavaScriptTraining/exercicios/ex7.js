class Carros {
    marca;
    cor;
    consumo;

    constructor (marca, cor, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
    }

    gasto (km, gasPreco) {
        // Aparentemente, não é possível criar uma variável em um método.
        console.log(`O carro da ${this.marca} de cor ${this.cor} deve pagar R$${((km / this.consumo) * gasPreco).toFixed(2)} de combustível.`);
    }
}

const carro1 = new Carros('Fiat', 'Vermelho', 12);
console.log(carro1)
carro1.gasto(115, 6.3);