/**
 * Halo: 1
 * ban: 2
 * ...
 */
//Data
const givenStr = 'Halo ban, tui ten Teo, ban cung ten Teo luon ah?';
//Usage
const groupWords= groupWordsMap(givenStr);
console.log(groupWords);

// Controller
function groupWordsMap(givenStr) {
    let individualWords = givenStr.replace(/,/gi, "").split(" "); // get space -> cut
    let wordMaps = new Map();
for (const word of individualWords) {
    if (wordMaps.has(word)){
        wordMaps.set(word,wordMaps.get(word)+1)
    }else {
        wordMaps.set(word,1)
    }
    
}
return wordMaps;
}