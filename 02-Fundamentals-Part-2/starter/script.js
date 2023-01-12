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


// ------------------------------------------------------

// ********* Lecture 20 : Arrow Function ************

// ------------------------------------------------------

const calcAge3 = birthYeah => 2037 - birthYeah;

console.log(calcAge3(1998));

const untilYearsRetirement =  birthYeah => {
    const age3 = 2037 - birthYeah;
    const retirement = 65 - age3;
    return retirement;
}
console.log(untilYearsRetirement(1998));

const untilYearsRetirement1 = (firstName, birthYeah) => {
    const age3 = 2037 - birthYeah;
    const retirement = 65 - age3;
    return `name ${firstName} : retirement years ${retirement}` ;
}

console.log(untilYearsRetirement1('jonas', 1998));
console.log(untilYearsRetirement1('Rohan', 1995));


// ----------------------------------------------------------------------

// ********* Lecture 21 : Functions calling other functions ************

// ----------------------------------------------------------------------

function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges `;
    return juice; 
}

console.log(fruitProcessor(2,3));

// ----------------------------------------------------------------------

// ********* Lecture 22 : Reviewing Function ************

// ----------------------------------------------------------------------

const calcAge4 = function(birthYeah){
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function(birthYeah,firstName){
    const age = calcAge4(birthYeah);
    const retireYearLeft = 65 - age;
    if(retireYearLeft > 0){
        console.log(`${firstName} retires in ${retireYearLeft} years`);
        return retireYearLeft;
    }
    else{
        console.log(`${firstName} has already retired 🚀`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));


// ----------------------------------------------------------------------

// ********* Lecture 23 : Introduction to Arrays ************

// ----------------------------------------------------------------------

const friends = ['Michael', 'steven', 'Peter'];
console.log(friends);

const years = new Array(1992, 1995, 1998, 2000);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'jay';

console.log(friends);

const firstName = 'Jonas';

const jonas = [firstName, 'schmedtmann', 2037 - 1990, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise on array
const calcAge5 = function(birthYeah){
    return 2037 - birthYeah;
} 

const yearsList = [1992, 2000, 1998, 1996, 2018];

const age_1 = calcAge5(yearsList[0]);
const age_2 = calcAge5(yearsList[2]);
const age_3 = calcAge5(yearsList[4]);

const ages = [age_1, age_2, age_3];

console.log(ages);
