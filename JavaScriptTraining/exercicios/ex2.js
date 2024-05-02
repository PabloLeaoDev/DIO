// abaixo de 5, reprovado; entre 5 e 7 recuperação; acima de 7 aprovado

let nota1 = 9.5;
let nota2 = 9; 
let nota3 = 7;

const media = (nota1 + nota3 + nota3) / 3;

if (media < 5) {
    console.log('REPROVADO!');
} else if (media >= 5 && media <= 7) {
    console.log('RECUPERAÇÃO!');
} else {
    console.log('APROVADO!');
}