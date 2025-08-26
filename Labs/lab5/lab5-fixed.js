const readline = require('readline-sync');
//Data
const inputStr = getUserInput();
const individualWords = processInputStr(inputStr)
//Usage
const groupWords = groupWordsWithObject(individualWords);
console.log(groupWords);

// Controller
function groupWordsWithObject(individualWords) {
    let wordObject = {};
    for (const word of individualWords) {
        if (wordObject[word]) {
            wordObject[word] += 1;
        } else {
            wordObject[word] = 1;
        }

    }
    return wordObject;
}

function getUserInput() {
    return readline.question(`Please enter a sentence: `);
}

function processInputStr(inputStr) {
    return inputStr.replace(/,/gi, "").split(" ");
}