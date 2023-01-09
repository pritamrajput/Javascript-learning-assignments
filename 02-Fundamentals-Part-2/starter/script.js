// -----------------------------------------------------------

// ********* Lecture 17 : Activate Strict Mode ************

// -----------------------------------------------------------

'use strict';
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface ='Audio'; // This will throw a syntax error as Javascript is reserving the variable 'interface' for a feature that it might add in the future. we see the error only because we have activated the strict mode :D ;
// const private = 3453; // This will throw a syntax error as Javascript is reserving the variable 'private' for a feature that it might add in the future. we see the error only because we have activated the strict mode :D ;


// -----------------------------------------------------------

// ********* Lecture 18 : Function ************

// -----------------------------------------------------------

function logger(){
    console.log('My name is Pritam');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges}`;
    return juice; 
}

let appleJuice = fruitProcessor(3,5);
console.log(appleJuice);
console.log(fruitProcessor(3,5));
