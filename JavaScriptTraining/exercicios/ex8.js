class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (this.altura ** 2)).toFixed(2);
    }

    exibir() {
        return `O valor do IMC de ${this.nome} é ${this.calcularImc()}. Ele está no nível: ${avaliarImc(this.calcularImc())}`;
    }
}

const p1 = new Pessoa('José', '70', '1.75');
const p2 = new Pessoa('Jonas', '110', '1.68');

function avaliarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso ideal!';
    } else if (imc >= 18.5 && imc <= 25) {
        return 'Peso ideal.';
    } else if (imc > 25 && imc <= 30) {
        return 'Acima do peso...';
    } else if (imc > 30 && imc <= 40) {
        return 'Obeso!';
    } else {
        return 'Obesidade Mórbida!!';
    }
}

// pode-se utilizar as variáveis e/ou funções globais em um método no JS. Mas não é possível criar varáveis locais no escopo dos métodos.
console.log(p1.exibir());
console.log(p2.exibir());