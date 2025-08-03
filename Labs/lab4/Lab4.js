const readline = require("readline-sync");

const teoAcc = {
    name: "Teo",
    accountNumber: 123456,
    routingNumber: 100,
    balance: 3000
};
const tiAcc = JSON.parse(JSON.stringify(teoAcc));
tiAcc.name = "Ti";
tiAcc.accountNumber = 246810;

const tunAcc = JSON.parse(JSON.stringify(teoAcc));
tunAcc.name = "Ti";
tunAcc.accountNumber = 130825;

//Account list
const bankAccounts = [teoAcc, tiAcc, tunAcc];
//console.log(bankAccounts);

console.log("Welcome the the SDET PRO Bank!");
let accountNo = getUserAccount();
let account = verifyAcc(accountNo);
if (account) {
    withdrawMoney(account);
}
function verifyAcc(accountNo) {
    for (let i = 0; i < bankAccounts.length; i++) {
        if (accountNo === bankAccounts[i].accountNumber) {
            console.log(`Your account is valid with name: ${bankAccounts[i].name} with routing no: ${bankAccounts[i].routingNumber} and balance: ${bankAccounts[i].balance}`)
            return bankAccounts[i];
        }
    }

    console.log("Your account is invalid. Please retry!");
    return null;
}
function withdrawMoney(account) {
    let withdrawAmount = getUserAmount();
    let balance = account.balance;
    if (withdrawAmount <= balance) {
        account.balance -= withdrawAmount;
        console.log(`Your balance is ${account.balance}`);
    }
    else {
        console.log(`The amount is exceed your balance. Your balance is ${balance}`);

    }
}

function getUserAccount() {
    return Number(readline.question(`Please enter your account number: `))
}

function getUserAmount() {
    return Number(readline.question(`Please enter withdraw ammount: `))

}





