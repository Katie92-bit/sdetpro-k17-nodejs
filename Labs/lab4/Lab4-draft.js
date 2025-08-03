const readline =require ("readline-sync");

const teoAcc= {
    name: "Teo",
    accountNumber: 123456,
    routingNumber: 100,
    balance: 3000
};
const tiAcc=JSON.parse(JSON.stringify(teoAcc));
tiAcc.name="Ti";
tiAcc.accountNumber=246810;

const tunAcc=JSON.parse(JSON.stringify(teoAcc));
tunAcc.name="Ti";
tunAcc.accountNumber=130825;

//Account list
const accountList = getBankAccounts({ accountNumbers: [teoAcc, tiAcc, tunAcc] });
console.log(`The account list is ${accountList}`);

function getBankAccounts({accountNumbers}){
    let accountList=[];
    for (const account of accountNumbers){
    accountList.push(account.accountNumber);
    }
    return accountList;
}

//
console.log("Welcome the the SDET PRO Bank");

function checkUserAccount (){
    return Number(readline.question("Please enter your account number: "));
}





