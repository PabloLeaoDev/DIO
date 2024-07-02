export abstract class DioAccount {
    private name: string;
    private status: boolean = false;
    private readonly accountNumber: number;
    balance: number = 0;

    constructor (name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    // setter
    setName = (name: string): void => {
        this.name = name;
        console.log('Nome alterado com sucesso!');
    }

    // getter
    getName = (): string => {
        return this.name;
    }

    deposit = (): void => {
        if (this.validateStatus()) {
            console.log('You deposited!');
        }
    }

    remove = (): void => {
        console.log('You removed!');
    }
    
    getBalance = (): void => {
        console.log(this.balance);
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }
        throw new Error('Conta Inválida');
    }
}

// a classe abstrata foi criada para reaproveitar código, já que com ela não se pode fazer uma instância, apenas criar atributos/elementos que serão compartilhados com outras classes que herdarão os mesmos. 

// o operador "private" significa que o atributo privado pode ser acessado somente dentro da própria classe. Faz-se possível criar um método para manipular o atributo que está privado.

// o operador "readonly" faz com que aquele atributo específico possa ser lido, somente. É análogo a uma constante, que só pode ter seu valor atribuído uma vez, em sua inicialização. O valor de um atributo "readonly" será o dado no momento da instância/construção do objeto, não podendo ser alterado.

// na POO existe uma boa prática essencial: o princípio da única resposabilidade. Cada método pode ter somente uma função/tarefa.