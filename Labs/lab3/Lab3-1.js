const readline = require("readline-sync");
let totalArrayNums = readline.question("How many numbers: ")
if (totalArrayNums > 10 || totalArrayNums < 2) {
    console.log(`We accept from 2-10 numbers only!`);
    process.exit(1);
}

let myArray = [];
for (let index = 0; index < totalArrayNums; index++) {
    let addNumber = Number(readline.question(`Please input number at index ${index + 1}: `));
    myArray.push(addNumber);
}

let evenCount = 0;
let oddCount = 0;
let evenNums = [];
let oddNums = [];
//function EvenOddNumbers ()
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    if (isEvenNumber(element)) {
        evenCount++;
        evenNums.push(element);
    }
    else {
        oddCount++;
        oddNums.push(element);
    }

}
console.log(`Total even Numbers: ${evenCount} from array ${evenNums}`);
console.log(`Total odd numbers: ${oddCount} from array ${oddNums}`);

function isEvenNumber(number) {
    return number % 2 === 0;
}





