const salario = 2900, beneficios = 500;

function calcularImposto(salario, imposto = null) {
    if (salario >= 0 && salario <= 1100) {
        imposto = salario * 0.05;
    } else if (salario > 1100 && salario <= 2500) {
        imposto = salario * 0.1;
    } else if (salario > 2500) {
        imposto = salario * 0.15;
    } else {
        console.log('O salário informado não é válido.')
    }
    return imposto;
}

let imposto = calcularImposto(salario);

function calcularGanho(salario, imposto, beneficios) {
    const valorFinal = salario - imposto + beneficios;
    return valorFinal;
}

let pagar = calcularGanho(salario, imposto, beneficios);

console.log(`Você deve receber R$${pagar}.`);