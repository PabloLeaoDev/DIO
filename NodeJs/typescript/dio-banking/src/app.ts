import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { OtherAccount } from "./class/OtherAccount";

const people: PeopleAccount = new PeopleAccount(123, 'Pablo', 1, false);
const company: CompanyAccount = new CompanyAccount('DIO', 2, true);
const other: OtherAccount = new OtherAccount('XPTO', 3, true);

people.setStatus(true);
people.deposit(9000);
console.log(people.getBalance());
console.log(people.getName());
people.setBalance(27000);
people.withdraw(12000);
console.log(people.getBalance());

company.getLoan(30000);
company.withdraw(15000);
company.deposit(10000);
console.log(company.getBalance());

other.deposit(100);
other.withdraw(20);
console.log(other.getBalance());