import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const people: PeopleAccount = new PeopleAccount(1, 'Pablo', 9);
// console.log(people);
const company: CompanyAccount = new CompanyAccount('DIO', 18);
// console.log(company);
people.deposit(); // retorna um erro, pois o status é "false"