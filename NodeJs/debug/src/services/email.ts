function getBaseEmail(senderName: string) {
    let base = `Olá, ${senderName}, gostaria de me candidatar para uma vaga.`;
    base += '\nEstou deixando o meu currículo.';
    return base;
}

export { getBaseEmail };