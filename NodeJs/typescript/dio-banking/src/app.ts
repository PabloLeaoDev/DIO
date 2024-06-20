abstract class Account {
    // a classe abstrata foi criada para reaproveitar código, já que com ela não se pode fazer uma instância, apenas criar atributos/elementos que serão compartilhados com outras classes que herarão os mesmos. 
    name: string;
    accountNumber: number;
    balance: number = 0;

    constructor (name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = () => {
        console.log('You deposited!');
    }

    remove = () => {
        console.log('You removed!');
    }
    
    getBalance = () => {
        console.log(this.balance);
    }
}

// A classe PeopleAccount herdou os atributos/elementos de Account

class PeopleAccount extends Account {
    doc_id: number;

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}

const people: PeopleAccount = new PeopleAccount(1, 'Pablo', 9);
console.log(people);