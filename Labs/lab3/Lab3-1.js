myArray = [1, 2, 3, 4, 5];

let evenCount = 0;
let oddCount = 0;

//function EvenOddNumbers ()
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    if (element % 2 === 0) {
        evenCount++;
    }
    else
        oddCount++;

}
console.log(`Even Numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);






