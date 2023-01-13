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


// ----------------------------------------------------------------------

// ********* Lecture 24 : Array methods ************

// ----------------------------------------------------------------------
const friends1 = ['Michael', 'john', 'Peter'];

console.log(friends1);
const newLength = friends1.push('jay');
console.log(friends1);
console.log(newLength);

const newLenght1 = friends1.unshift('Pritam');
console.log(friends1);
console.log(newLenght1);

const elemReturn = friends1.pop();
console.log(friends1);
console.log(elemReturn);

const elemReturn1 = friends1.shift();
console.log(friends1);
console.log(elemReturn1);

const posiElement = friends1.indexOf('Michael');
const posiElement1 = friends1.indexOf('Bob');
console.log(posiElement, posiElement1);

friends1.push('23');
console.log(friends1.includes('Michael'));
console.log(friends1.includes('Pritam'));
console.log(friends1.includes('23'));


// ----------------------------------------------------------------------

// ********* Lecture 25 : Introduction to Arrays ************

// ----------------------------------------------------------------------

// ARRAYS
const jonasArray = [
    'jonas',
    'schmedtmann',
    2037 - 1998 ,
    'teacher',
    ['Michael', 'Peter','Steven']
];

// OBJECTS

const jonasOne = {
 firstName: 'jonas',
 lastName: 'schmedtman',
 age: 2037 - 1998,
 job: 'Teacher',
 friends: ['Michael', 'Peter', 'Steven']
};

// console.log(jonasOne);


// ----------------------------------------------------------------------

// ********* Lecture 26 : DOT vs Bracket notation ************

// ----------------------------------------------------------------------

const jonasOne1 = {
    firstName: 'jonas',
    lastName: 'schmedtmann',
    age: 2037 - 1998,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'] 
};

console.log(jonasOne1.firstName);
console.log(jonasOne1['lastName']);

const nameKey = 'Name';

console.log(jonasOne1["first" + nameKey]);
console.log(jonasOne1["last" + nameKey]);

// console.log(jonasOne1.'first' + nameKey); --- This is not possible with DOT notation.

const interestedIn = prompt('what do you want to know about jonas ? Choose between firstName, lastName, age, job and friends');


if(jonasOne1[interestedIn]){
    console.log(jonasOne1[interestedIn]);
}
else{
    console.log("Wrong input ! Choose between firstName, lastName, age, job and friends");
}

jonasOne1.location = 'Portugal';
jonasOne1['twitter'] = "@jonasschmedtmann";
console.log(jonasOne1);

console.log(jonasOne1.firstName + " has " + jonasOne1.friends.length + " friends, and his best friend is "+jonasOne1.friends[0] );
// we can also do this with template literals

console.log(`${jonasOne1.firstName} has ${jonasOne1.friends.length} friends, and his best friend is ${jonasOne1.friends[0]}`);



// ----------------------------------------------------------------------

// ********* Lecture 27 : Objects methods ************

// ----------------------------------------------------------------------

const jonasOne2 = {
    firstName: 'jonas',
    lastName: 'schmedtmann',
    birthYeah: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'], 
    hasDtiverLicense:false,

    // calcAge: function(birthYeah){
    //     return 2037 - birthYeah;
    // }
    
    // calcAge: function(){
    //     //console.log(this);
    //      return 2037 - this.birthYeah;
    // }
    calcAge: function(){
         this.age = 2037 - this.birthYeah;
         return this.age;
    },

   getSummary: function(){
     if(this.hasDtiverLicense){
        return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has a driver's license`; 
     }
     else{
        return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has no driver's license`; 
     }
   }
};

// console.log(jonasOne2['calcAge'](1991));
// console.log(jonasOne2.calcAge(1991));
console.log(jonasOne2.calcAge());

console.log(jonasOne2.age);
console.log(jonasOne2.age);
console.log(jonasOne2.age);
console.log(jonasOne2.getSummary());

 