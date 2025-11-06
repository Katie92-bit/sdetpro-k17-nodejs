// DRY stands for Don't Repeat yourself => gather logic and reuse
// Single Responsibility = Đơn nhiệm
// Clean Code
/* 
Basic naming convention for function
1. Meaning
2. verb + lowercase
3. camelCase
*/

const readline = require("readline-sync")
// hoisting duoc dang len day de dung
let getUserInputNum = getUserInputNum(); //OK
let getUserInputNumFn = getUserInputNumFnExpression(); // Reference error, cannot access funtion before initialization
console.log(`User input` ${ getUserInputNum });

//Parameter
let result = addNUmber (1,2);
console.log(`Add result: ${result}`);


// Method 01: [ Function Declaration ] | Hoisting
function getUserInputNum() {
    let inputNumber = readline.question("Your number:");
    return Number(inputNumber);// k co return thi tra ve undefined
}

// Method 02: [ Function Expression ] | NO Hoisting

const getUserInputNumFnExpression = function () {
    let inputNumber = readline.question("Your number:");
    return Number(inputNumber);
}

// Parameters
function addNUmber (num1,num2){
    console.log(`num1: ${num1}, num2: ${num2}`);
    return num1 + num2;
   
}
// reuse function o cac file khac



