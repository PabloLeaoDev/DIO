let peso = 70;
let altura = 1.72;
const imc = peso / (altura ** 2);

if (imc < 18.5) {
    console.log('Você está abaixo do peso ideal!');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Você está no peso ideal. Parabéns!');
} else if (imc > 25 && imc <= 30) {
    console.log('Você está acima do peso. Tente emagrecer um pouco...');
} else if (imc > 30 && imc <= 40) {
    console.log('Você está obeso! Procure ajuda!');
} else {
    console.log('Você está com obesidade severa!! Procure ajuda médica imediata!');
}