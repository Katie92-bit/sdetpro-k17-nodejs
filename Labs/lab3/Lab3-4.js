const { getMinElement } = require("../utils/UtilMethods");
array01 = [1, 12, 16, 28, 34];
array02 = [1, 13, 16, 27, 99];

array03 = array01.concat(array02);
console.log(array03);
let sortedArray = [];
clonedArray = [...array03];

for (let index = 0; index < array03.length; index++) {
    console.log(clonedArray);
    let result = getMinElement(clonedArray);
    console.log(result.minElement, result.minIndex);
    sortedArray.push(result.minElement);
    console.log(`SortedArray ${index + 1} time is: ${sortedArray}`);
    //Update Array
    let deleteCount = 1;
    clonedArray.splice(result.minIndex, deleteCount);
    console.log(`Cloned Array after splice: ${clonedArray}`);
}
