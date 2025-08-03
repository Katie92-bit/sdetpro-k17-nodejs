// Convention: camelCase, snake_case, PascalCase
let myName = "Hien";

console.log(myName);
console.log(myName2);
var myName2 = "Hien2" // Hoisting
console.log(myName2);

// [OK] Re-assign, [X] Re-declare
myName = "Kim";
// let myName ="Minh";  //BlockScope?

//Constant 
const PI_NUMBER = 3.14; // [X] PI_NUMBER = 11;

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(999999999999999999); //1000000000000000000
console.log(0.1 + 0.2) //0.30000000000000004
console.log(0.1 + 0.1) //0.2


//Check type of variable
console.log(typeof (1.7976931348623157e+308));
console.log(Infinity > 1.7976931348623157e+308); //true
console.log(2 / 0); //Infinity


//Boolean
let amIRight = false;
amIRight = true;
amIRight = "Hello"; // Cho đổi kiểu dữ liệu => Typescript giải quyết đc vđ





