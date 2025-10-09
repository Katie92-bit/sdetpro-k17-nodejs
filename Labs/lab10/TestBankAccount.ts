import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

let savingAccount = new SavingAccount();
let checkingAccount = new CheckingAccount();

//Deposit
savingAccount.deposit(100);
checkingAccount.deposit(100);

//Get balance
console.log(`Saving acc balance ${savingAccount.getBalance}`);
console.log(`Checking acc balance ${checkingAccount.getBalance}`);

//Withdraw: positive case
savingAccount.withdraw(100);
checkingAccount.withdraw(50);

//Withdraw: negative case
savingAccount.withdraw(1);
checkingAccount.withdraw(1);
