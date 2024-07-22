import { login } from "./login";
describe('login', () => {
    const mockAlert = jest.fn();
    const mockPrompt = jest.fn();

    beforeAll(() => {
        window.alert = mockAlert;
        window.prompt = mockPrompt;
    });

    beforeEach(() => {
        mockAlert.mockClear();
        mockPrompt.mockClear();
    });

    // it('Deve exibir um alert com boas-vindas <nome-do-usuário>', () => {
    //     const username = 'test-user';
    //     mockPrompt.mockReturnValueOnce(username);

    //     login('pablo@gmail.com');

    //     expect(mockAlert).toBeCalledWith(`Boas-vindas, pablo@gmail.com!`);
    // });
});
