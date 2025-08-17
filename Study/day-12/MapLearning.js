//CREATE
const emergencyList= new Map([
    ['113', 'Police dept'],
    ['114', 'Fire dept'],
    ['115', 'Hospital dept'],
    ['116', 'Other'],
])
//READ
console.log(emergencyList.get('116'));
console.log(emergencyList.get('Fire dept')); // undefined

const is117Existing = emergencyList.has('114');
console.log(`Is 117 existing: ${is117Existing}`);


//Loop over all keys and get values
const allKeys = emergencyList.keys();
for (const key of allKeys) {
    console.log(`${key}: ${emergencyList.get(key)}`);
    }

    for (const value of emergencyList.values()) {
        console.log(`Value: ${value}`);
        
    }

//UPDATE/ADD
emergencyList.set ('116', "New value");
emergencyList.set('117', 'Something else');
console.log(emergencyList);

//DELETE
console.log(`The size before: ${emergencyList.size}`);
console.log(emergencyList);
emergencyList.delete('117');
console.log(`The size after: ${emergencyList.size}`);
console.log(emergencyList);

// Get keys and values; co the alias key, value thanh teo ti gi cũng đc
for (const [key, value] of emergencyList) {
    console.log(`${key}: ${value}`);
}

const someObj={
    myArray: [

    ]
}
console.log(Object.entries(someObj));




