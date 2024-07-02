import { DioAccount } from "./DioAccount";

export class OtherAccount extends DioAccount {
    constructor (name: string, accountNumber: number, status: boolean) {
        super(name, accountNumber, status);
    }

    deposit = (depositValue: number): void => {
        if (this.validateStatus()) {
            this.setBalanceOtherAccount(depositValue);
            console.log('You deposited + 10$ as bonus!');
        }
    }
}