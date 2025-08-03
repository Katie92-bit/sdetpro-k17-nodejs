myArray = [1, 2, 3, 4, 5];
//Filter just Even Numbers from Array
// filter is a HOF
let myEvenNums = myArray.filter(isEvenNumber);
    console.log(myEvenNums);

function isEvenNumber(value,index,array) {
    console.log(`Validating ${value} at index ${index} in the array ${array}`);
    return value % 2 === 0;
}

function isOddNumber (value, index, array){
    return !isEvenNumber(value,index, array);
}

// DELETE | Splice

let startIndex=2;
let deleteCount=1;
let insertValue = 10;
let cloneArray =[...myArray];
cloneArray.splice(startIndex,deleteCount,insertValue);
console.log(cloneArray);
console.log(myArray);

