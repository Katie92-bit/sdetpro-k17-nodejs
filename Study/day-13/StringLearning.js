// STRING IS IMMUTABLE
let myString ="     Hello, day la dau nhay kep: \"";
console.log(myString);

//Length
const strLength = myString.length;
console.log(strLength);

// Get a char at a position
for (let index =0; index< strLength; index++){
//console.log(myString.charAt(index));
}

//Get rid of spaces at beginning and end of string
console.log(myString.trim());
console.log(myString.length);

// Replace: tmoi nmay gamp mnhamu 7hm <-- encoded
let encodedStr="tmoi Mnmay gaMp Mnhamu 7hm";
console.log(encodedStr.replaceAll("m",""));

// Regex - Regulalr Expression 
encodedStr.replace(/m/gi, "")

/**
 * Preparation: 30mins
 * Cooking: 120 mins
 * Total: 150mins
*/

let totalCookingTimeFromUI=" Total: 150mins"
let toalCookingTimeStr=totalCookingTimeFromUI.replace(/[^0-9]/gim,"")
console.log(Number(toalCookingTimeStr));

//Concatenation

let str1 ="Hello";
let str2 ="Teo";
let finalStr=str1+str2.concat("How old are you?"); //=str1+str2+ "How old are you?"
console.log(finalStr);


//Sub-string
let strToBeCut ="hello, teo";
//Inclusive
let startIndex=0
//Exclusive
let endIndex=5
let subStr = strToBeCut.substring(startIndex,endIndex);
console.log(subStr);


//Split
console.log(strToBeCut.split(","));
