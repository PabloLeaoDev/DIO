export const soma = (num: number): number => {
    return num + 1;
}

export const multiplica = (num: number, mult: number = 3): number | string => {
    if (mult === 3) {
        return num * mult;
    }
    return 'Multiplicador não aceito!';
}