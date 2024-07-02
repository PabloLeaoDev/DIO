import { DioAccount } from "./DioAccount";
// A classe PeopleAccount herdou os atributos/elementos de Account

export class PeopleAccount extends DioAccount {
    doc_id: number;

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}