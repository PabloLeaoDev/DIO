export const login = (): void => {
    const user: string | null = prompt('Digite seu nome de usuário:');
    alert(`Boas-vindas, ${user}!`);
}