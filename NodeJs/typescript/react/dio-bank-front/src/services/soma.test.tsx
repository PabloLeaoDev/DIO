import { soma, multiplica } from './soma';

describe('soma', () => {
    it('Deve somar 1 ao número informado', () => {
        const value = soma(1);
        expect(value).toBe(2);
    })

    it('Deve multiplicar o número informado por 3', () => {
        const value = multiplica(2, 3);
        expect(value).toBe(6);
    })

    it('Deve retornar um erro se o multiplicador for diferente de 3', () => {
        const value = multiplica(2, 2);
        expect(value).toBe('Multiplicador não aceito!');
    })
})