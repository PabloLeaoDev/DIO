const {gets} = require('../gets-print/main1');

gets('Digite sua Média: ')
    .then((media) => {
        recebido(media); // Chama outra função passando o nome como argumento
    })
    .catch((erro) => {
        console.error('Erro:', erro);
    });

// Função que usa o nome recebido como argumento
function recebido(media) {
    if (media >= 0 && media < 5) {
        console.log('Aluno REPROVADO!');
    } else if (media >= 5 && media < 7) {
        console.log('Aluno em RECUPERAÇÃO!');
    } else if (media >= 7 && media <= 10) {
        console.log('Aluno APROVADO!');
    } else {
        console.log('Essa média não é válida.');
    }
}