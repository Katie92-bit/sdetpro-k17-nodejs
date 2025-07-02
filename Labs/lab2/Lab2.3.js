const readline = require("readline-sync");
let yourWeight = Number(readline.question(" Your weight: "));
let yourHeight = Number(readline.question("Your height: "));
let yourBMI = yourWeight / (yourHeight * yourHeight);
console.log("Your BMI: ", yourBMI);
const MIN_STANDARD_BMI = 18.5;
const MAX_STANDARD_BMI = 24.9;


if (yourBMI < 18.5) {
    console.log("Underweight, You should increase at least: ", ((MIN_STANDARD_BMI * yourHeight * yourHeight) - yourWeight), "kg")
}

else if ((yourBMI >= 18.5) && (yourBMI < 24.9)) {
    console.log("Normal weight, Congratulations");
}
else if ((yourBMI >= 24.9) && (yourBMI < 30)) {
    console.log("Overweight, You should decrease at least: ", (yourWeight - (MAX_STANDARD_BMI * yourHeight * yourHeight)), "kg")
} else {
    console.log("Obesity, You should decrease at least: ", (yourWeight - (MAX_STANDARD_BMI * yourHeight * yourHeight)), "kg")
}
