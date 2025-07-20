myArray = [3, 2, 3, 4, 5];

let minElement = myArray[0];
let maxElement = myArray[0];

for (let index = 0; index < myArray.length; index++) {
    if (minElement >= myArray[index]) {
        minElement = myArray[index];
    }
}
console.log(`Min value: ${minElement}`);

for (let index = 0; index < myArray.length; index++) {
    if (maxElement <= myArray[index]) {
        maxElement = myArray[index];
    }
}

console.log(`Max value: ${maxElement}`);

