// ao retornar outra função, evita-se uma execução prematura do código, que ocorreria logo na redenrização do button, por causo do JSX/TSX. Dessa maneira, será atribuído a "onClick" a função retornada, que só será chamada no envento de clique.
export const login = (user: string) => () => {
    alert(`Boas-vindas, ${user}!`);
}