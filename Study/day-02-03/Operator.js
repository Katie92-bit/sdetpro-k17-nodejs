let myNum1=1;
let myNum2=2;

//1.Right operand and left operand
let result =myNum1 + myNum2; // Thuc thi ben phai, dan kqua sang ben trai
console.log('Total value: ' + result); //Format code
console.log('Total value:' , result); 

// String litteral/template
console.log( `Total value: ${result}`); // Move hàng hot key

result=5/2;
console.log( `Total value: ${5/2}`); //  $ {}- tinh toan
console.log( `Total value: ${myNum1/myNum2}`); 

// Rounding

let roundingNearest = Math.round(9/2);
console.log(`9/2: ${9/2}`);
console.log (`10/3: ${10/3}`);
console.log(`9/2: ${roundingNearest}`);


let roundingFloor =Math.floor(9/2);
console.log(`9/2: ${roundingFloor}`);


let roundingCeiling =Math.ceil(10/3);
console.log(`10/3: ${roundingCeiling}`);

// To fix Number
let randomResult =10/3;
let MAX_FLOATING_NUMBER=2;
let toFixNumber =randomResult.toFixed(MAX_FLOATING_NUMBER);
console.log(`10/3(To Fix Number): ${toFixNumber}`);


// * (Nhân) ** (Mũ - Square up a number) *** [X]
let squareNumber = 9**3;
console.log(squareNumber);














