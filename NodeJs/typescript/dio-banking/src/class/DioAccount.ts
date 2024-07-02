export abstract class DioAccount {
    private readonly name: string;
    private status: boolean;
    private readonly accountNumber: number;
    private balance: number = 0;

    constructor (name: string, accountNumber: number, status: boolean) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.status = status;
    }

    getName = (): string => {
        return this.name;
    }

    setStatus = (status: boolean): void => {
        this.status = status;
        console.log('Account status has been changed successfully!');
    }

    setBalance = (newBalance: number): void => {
        this.balance = newBalance;
    }

    getBalance = (): number => {
        return this.balance;
    }

    setBalanceOtherAccount = (extraValue: number): void => {
        this.balance += extraValue + 10;
    }

    deposit = (depositValue: number): void => {
        if (this.validateStatus()) {
            this.balance += depositValue;
            console.log('You deposited!');
        }
    }

    withdraw = (withdrawValue: number): void => {
        if (withdrawValue <= this.balance && this.validateStatus()) {
            this.balance -= withdrawValue;
        } else {
            throw new Error('Insufficient Balance!');    
        }
    }

    remove = (): void => {
        console.log('You removed!');
    }

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }
        throw new Error('Invalid Account!');
    }
}

// getters e setters estão sendo implementados.

// a classe abstrata foi criada para reaproveitar código, já que com ela não se pode fazer uma instância, apenas criar atributos/elementos que serão compartilhados com outras classes que herdarão os mesmos. 

// o operador "private" significa que o atributo privado pode ser acessado somente dentro da própria classe. Faz-se possível criar um método para manipular o atributo que está privado.

// o operador "readonly" faz com que aquele atributo específico possa ser lido, somente. É análogo a uma constante, que só pode ter seu valor atribuído uma vez, em sua inicialização. O valor de um atributo "readonly" será o dado no momento da instância/construção do objeto, não podendo ser alterado.

// na POO existe uma boa prática essencial: o princípio da única resposabilidade. Cada método pode ter somente uma função/tarefa.