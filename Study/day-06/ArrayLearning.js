/* Collection
CRUD: Create Read Update Delete + Util (Built-in Method)
*/

let myArray =[1,2,3,4,5];
//1st element : index ==0
//last element: index = length -1
console.log(`Length: ${myArray.length}`);
let lastElementIndex = myArray.length-1;
let lastElementValue = myArray[lastElementIndex];
console.log(`Last element's value: ${lastElementValue}`);



myArray[lastElementIndex]=50;
for (let index = 0; index < myArray.length; index++) {
    console.log(`Element's value at index ${index} is: ${myArray[index]}`);
}

//Undefined holes

myArray[10] = 1000 // Java: IndexOutOfBound


//push, pop
myArray[myArray.length=1001]; // add thêm vao cuoi
myArray.push(1001);
myArray.pop();
