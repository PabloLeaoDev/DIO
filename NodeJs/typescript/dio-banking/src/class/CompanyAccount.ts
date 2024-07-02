import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor (name: string, accountNumber: number, status: boolean) {
        super(name, accountNumber, status);
    }

    getLoan = (loanValue: number): void => {
        if (this.validateStatus) {
            this.deposit(loanValue);
        }
        console.log('The company took out a loan.');
    }
}