const readline = require("readline-sync");

//Data - In memory DB - du lieu co cau truc
const teoAccount = {
    name: "Teo",
    accountNumber: '123456',
    routingNumber: '100',
    balance: 30000
};
const tiAccount = JSON.parse(JSON.stringify(teoAccount));
tiAccount.name = 'Ti';
tiAccount.Number = '654321'
tiAccount.balance = 100000
const bankAccounts = [teoAccount, tiAccount];

//Usage: Provide data and call controllers to solve requirements
bankApp();

//Controllers
function bankApp() {
    let isInteracting = true;
    let failedAttempts=0;
    while (isInteracting && failedAttempts < 3) {
        printAppMenu();
        const userOption = getUserOption();

        switch (userOption) {
            case 1:
                const foundAccount = findAccount();
                printAccountInfo(foundAccount);
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                failedAttempts++;
                console.log(`Wrong option! Attempt ${failedAttempts}`);
        }
    }
    console.log((`See you again!`));
}

// Support functions
function printAppMenu() {
    console.log(
        `
    === Banking application===
    1. Find an account
    2. Update balance
    0. Exit the program
`);

}
function getUserOption() {
    return Number(readline.question(`Your option: `));
}

function findAccount() {
    let foundAccount = null;
    //Get user account Number
    const inputAccountNumber = readline.question(`Please enter account no:`)
    // Loop over bank account data - if found -> return bank Acc | null
    for (const account of bankAccounts) {
        if (account.accountNumber === inputAccountNumber) {
            foundAccount = account;
            break;
        }

    }
    return foundAccount;
}

function printAccountInfo(account) {
    if (account) {
        const { name, balance } = account;
        console.log(`Account info: name ${name} | balance ${balance}`);
    } else {
        console.log(`Account is not existing!`);
    }
}
function updateBalance() {
    // Get account info using findAccount function
    const foundAccount = findAccount();
    if (foundAccount) {
        const { balance } = foundAccount;
        console.log(`Current balance: ${balance}`);
        const withdrawAmount = Number(readline.question(`How much do u want to withdraw`));
        if (withdrawAmount <= balance) {
            foundAccount.balance = balance - withdrawAmount;
            console.log(`Withdraw succeed!`);

        } else {
            console.log(`Insufficient balance`);

        }

    }
}

