const readline = require("readline-sync")

let arrivalTimeStr -readline.question("Arrival Time: ")
//let isHeOnTime =(arrivalTimeStr==7);

// let isHeOnTime =(arrivalTime===7); False => 7 bien thanh string , === so sanh kieu du lieu truoc
// => Convert a sgtring into number
let arrivalTime = Number(arrivalTimeStr);

//Global Block scope
let isHeOnTime = true;
let myName = "Tun";

if (isHeOnTime) {
    //Block scope 1
    console.log("Let's talk");
    let myName = "Teo";
} else {
    //Block scope 2
    console.log(`Write a letter`);
    let myName = "Ti";

}

console.log(myName); //Tun

// Ternary operator: Toan tu 3 ngoi

let msg = isHeOnTime ? 'Let\'s talk' : 'Write a letter'
console.log(msg);

// !true -> false
if (!isHeOnTime)

    //Mimic real situation in life
    if (isSalaryIncreased) {
        //Nested if ... else condition
        // Stay at company

        if (isSightDiff) {
            //Stay for a while
        }
        else {

        }
    }
