const readline = require('readline-sync');
//Data
const givenStr = getUserInput();
//Usage
const groupWords = groupWordsWithObject(givenStr);
console.log(groupWords);

// Controller
function groupWordsWithObject(givenStr) {
    let individualWords = givenStr.replace(/,/gi, "").split(" ");
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