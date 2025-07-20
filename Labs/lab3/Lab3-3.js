let myArray = [12, 34, 1, 16, 28];
let sortedArray = [];
clonedArray = [...myArray];

for (let index = 0; index < myArray.length; index++) {
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