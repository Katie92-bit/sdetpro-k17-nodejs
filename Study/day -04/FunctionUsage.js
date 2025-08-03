//Import a module
//const UtilMethods =require("../utils/UtilMethods.js"); 


//let userInput = UtilMethods.getUserInputNum();
//let userInputFnExpression = UtilMethods.getUserInputNumFnExpresion();

// Destructure => just use sepcific modules

const { getUserInputNum} =require("../utils/UtilMethods.js");

let userInput = getUserInputNum();



