"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseEmail = void 0;
function getBaseEmail(senderName) {
    let base = `Olá, ${senderName}, gostaria de me candidatar para uma vaga.`;
    base += '\nEstou deixando o meu currículo.';
    return base;
}
exports.getBaseEmail = getBaseEmail;
