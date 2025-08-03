const readline= require("readline-sync");
function getUserInputNum() {
    let inputNumber = readline.question("Your number:");
    return Number(inputNumber);
}

const getUserInputNumFnExpression = function () {
    let inputNumberFn = readline.question("Your number:");
    return Number(inputNumber);
}


function getMinElement(array) {
    let minElement = array[0];
    let minIndex = 0;

    for (let index = 0; index < array.length; index++) {
        if (minElement >= array[index]) {
            minElement = array[index];
            minIndex = index;
        }
    }
    return { minElement, minIndex };

}
// export hàm ra bên ngoài
// Common JS Module
module.exports={
alias1: getUserInputNum,
alias2: getUserInputNumFnExpression, // co the dat ten khac
getMinElement
};
