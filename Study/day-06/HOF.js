/* 
Bà 3: parameter => Recipe
HOF nhận parameter là definition of ANOTHER function (callbackFn)
or RETURN definition of a function
*/

// Definition of another function
function greet(name){
    console.log(`Hello, ${name}`);
    }

    function elegantGreet(name){
    console.log(`Hello, ${name}. Where have you been?`);
    }

    //HOF: Bà 3

    function hof(callbackFn){
        let name ="Teo";
        callbackFn(name);
    }

    hof(greet);
    hof(elegantGreet);