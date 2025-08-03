const readline = require("readline-sync");
let inputNumber = Number(readline.question("Pleaase input a number: "));

let isEvenNumber = yourNumber % 2;
let isANumber = Number.isNaN(yourNumber);

{ if (isANumber)

}

if (inputNumber === 0) {
    console.log('Zero is not considered as even/odd number');

}
{
else if (isEvenNumber == 0) {
        console.log(`The ${inputNumber} is an even number`);

    }
    else {
        console.log(`The ${inputNumber}is an odd number`);
    }
}


/* 1. Plain logic 
2. Put details: variable, calculate 
3. Make sure main requirements met 
4. Check edge cases 
4.1 If have time, solve them 
4.2 If not capture in a ticket and ticket make things transparency 
It seems we forgot to applied ... 
// 5. Fine tune logic if any
 
 Reliable: 
+ Readability
+ Maintainable
+ Extenable
 */