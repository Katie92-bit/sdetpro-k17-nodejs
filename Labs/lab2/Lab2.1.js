const readline = require("readline-sync");
let yourWeight = Number(readline.question(" Your weight: "));
let yourHeight = Number(readline.question("Your height: "));
let yourBMI = yourWeight / (yourHeight * yourHeight);
console.log("Your BMI: " , yourBMI);

if (yourBMI < 18.5) {
    console.log("Underweight");
} 
else if((yourBMI >= 18.5) && (yourBMI < 24.9))
{
    console.log("Normal weight");
}
else if((yourBMI >= 24.9) && (yourBMI < 30))
{
    console.log("Overweight");
} else 
{
    console.log("Obesity");

}


