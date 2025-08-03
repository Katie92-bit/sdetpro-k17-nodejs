let myArray = [5, 5, 5, 5, 5];

let minElement = myArray[0];
let maxElement = myArray[0];
let minValueIndexes = [0];
let maxValueIndexes = [0];

for (let index = 0; index < myArray.length; index++) {
    const currentValue = myArray[index];
    if (minElement > currentValue) {
        minElement = currentValue;
        minValueIndexes = [];
        minValueIndexes.push(index);
    } else if (currentValue === minElement) {
        minValueIndexes.push(index);
    }

    if (maxElement < currentValue) {
        maxElement = currentValue;
        maxValueIndexes = [];
        maxValueIndexes.push(index);
    } else if (currentValue === maxElement) {
        maxValueIndexes.push(index);

    }
}

if (minElement===maxElement){
    console.log(`All elements have same value ${minElement}`);
    
}
else {
    console.log(`Min value: ${minElement}, min Value Indexes: ${minValueIndexes}`);
    console.log(`Max value: ${maxElement}, max Value Indexes: ${maxValueIndexes}`);
}
