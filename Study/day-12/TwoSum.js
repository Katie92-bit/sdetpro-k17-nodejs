/**
 * Input: [3,7,21,1]; Target number: 8
 * Output: [index1, index2]| []
 * Outer Loop: outerIndex
 * firstnum
 * findingNumber = targetNumber - firstnum
 *      inner loop 
 *          outerIndex +1
 *          if currentNumber=== findingNumber
 *          return [outerIndex, innerIndex]
 * return []
 */

const givenArray = [3, 7, 21, 1];
const targetNumber = 8;

let indicesBruteForce = findIndicesBruteForce(givenArray, targetNumber);
console.log(indicesBruteForce);
let indicesMap = findIndicesMap(givenArray, targetNumber);
console.log(indicesMap);

//Brute Force| Time Complexity: O(n^2)

function findIndicesBruteForce(givenArray, targetNumber) {
    for (let firstNumIndex = 0; firstNumIndex < givenArray.length; firstNumIndex++) {
        const firstNum = givenArray[firstNumIndex];
        const findingNumber = targetNumber - firstNum;
        for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < givenArray.length; secondNumIndex++) {
            const secondNum = givenArray[secondNumIndex];
            if (secondNum === findingNumber) {
                return [firstNumIndex, secondNumIndex];
            }

        }
    }
    return [];
}
//Map | Time Complexity: O(n)
function findIndicesMap(givenArray, targetNumber) {
    let numMap=new Map();
    for (let firstNumIndex = 0; firstNumIndex < givenArray.length; firstNumIndex++) {
        const firstNum = givenArray[firstNumIndex];
        const findingNumber = targetNumber - firstNum;

        if(numMap.has(findingNumber)){
            return [numMap.get(findingNumber),firstNumIndex]
        }
        numMap.set(firstNum, firstNumIndex);
    }
}

