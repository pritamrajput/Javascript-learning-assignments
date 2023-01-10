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


// --------------------------------------------------------------------------------

// ********* Lecture 19 : Function declaration vs Function Expression ************

// --------------------------------------------------------------------------------


// Function Declaration

function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1997);
console.log(age1);

// Function Expression

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
 }
const age2 = calcAge2(1998);

console.log(age2);