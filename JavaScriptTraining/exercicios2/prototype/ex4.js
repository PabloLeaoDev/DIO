//  Quase tudo em JS é um protótipo/objeto. Segue um exemplo abaixo
//  Obs: O código abaixo não é uma BOA PRÁTICA! Criado com um objetivo meramente educacional

String.prototype.toPLang = function () {
    return `P ${this}`
}

console.log('teste'.toPLang())