// ***********************   Lecture 01   *********************
// let js = 'amazing';
// console.log(40+2+45-32);

// console.log("jonas");
// console.log(23);

// let firstName = "Pritam";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let pritam_chauhan = "PC";
// let $function = 27;

// let person = 'jonas';
// let PI = 3.1415;

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// console.log(myFirstJob);
// console.log(myCurrentJob);



//This is for the assignment 01 Lecture : values and variables
// let myCountry = 'India';
// let myContinent = "Asia";
// let countryPopulation = '132crore';
// console.log('The country in which I live in is ' + myCountry);
// console.log('The country in which I live is in ' + myContinent + ' continent');
// console.log('The population of the country is ' + countryPopulation);
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Pritam');


// *****  lecture 3 : let, const and var   ******
// let age = 30;
// age = 32;

// const birthYear = 1991;
// birthYear = 1994;
// const job;
// var job = 'programmer';
// job = 'teacher';

// lastName = "chauhan";
// console.log(lastName);


// ---------------------------------------------------------------------

// ******* Lecture 4 : Basic Operators ********

// ---------------------------------------------------------------------

//  **Arithmetic operators**
// const now =2037;
// const agePritam = now - 1995;
// const ageSarah = now  - 2018;
// console.log(agePritam,ageSarah);
// console.log(agePritam * 2, ageSarah / 2, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 which equals to 2*2*2 
// const firstName = 'Pritam';
// const lastName = 'Chauhan';
// console.log(firstName + ' ' + lastName);

//  **Assignment operator**
// let x = 10 + 5;
// x+=10; // means x = x + 10;
// x-=10; //means x = x - 10;
// x*=2; // means x = x * 2;
// x/=10; // means x = x / 10;
// console.log(x);

//  **Comparison operator**
// console.log(agePritam>ageSarah);
// console.log(ageSarah>=18);

// const isFullAge = ageSarah>=18;
// console.log(now - 1995 > now - 2018);


// -----------------------------------------------------------

// ********* Lecture 5: Operator Precendence ************

// -----------------------------------------------------------

// const now =2037;
// const agePritam = now - 1995;
// const ageSarah = now  - 2018;
// console.log(now - 1995 > now - 2018);
// // console.log(5-10-34);

// let x,y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10;
// console.log(x,y);

// const averageAge = (agePritam + ageSarah) / 2;
// console.log(averageAge);


// -----------------------------------------------------------

// ********* Lecture 6: Strings and Template literals ************

// -----------------------------------------------------------

// const firstName = 'jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2031;
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " year old " + job;
// console.log(jonas);
// console.log(`I'm ${firstName}, a ${year - birthYear} year old ${job}`);

// // To create multiple lines string.
// // Before ES6
// console.log("String with \n\
// multiple \n\
// lines");
// //After ES6 multiple lines with Template literals
// console.log(`String
// with multiple
// lines`);

// -----------------------------------------------------------

// ********* Lecture 7: Taking Decisions: If/else statements ************

// -----------------------------------------------------------

// const age = 15;
// const isOldEnough = age >=18;
// if(isOldEnough){
//     console.log('Sarah can start the driving licence')
// }
// else {
//     const yearLeft = 18 - age;
//     console.log(`Please apply after ${yearLeft} years. You are too young 😀`);
// }

// const birthYear = 2001;
// let century;
// if(birthYear<=2000){
//     century = 20;
//     console.log(`The person is born in ${century} century!`)
// }
// else{
//     century = 21;
//     console.log(`The perosn is born in ${century} century!`)
// }


// -----------------------------------------------------------

// ********* Lecture 8: Type conversion and coercion ************

// -----------------------------------------------------------

//Type conversion
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear)+18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23)+19);

// Type coercion
console.log('I am ' + 23 + ' year old.');
console.log('23' - 10 - '3');
console.log('23'*'2');
console.log('23'/'2');

//Exercise
let n = '1'+ 1;
n = n - 1;
console.log(n);


// -----------------------------------------------------------

// ********* Lecture 9 : Truthy and Falsy values ************

// -----------------------------------------------------------

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('Jonas'));
console.log(Boolean(undefined));
console.log(Boolean({}));

const money = 0;
if(money){
    console.log("Don't spend it all");
}
else{
    console.log("You should get a job");
}

let height;
if(height){
    console.log("YO! Height is defined");
}
else{
    console.log("Height is UNDEFINED");
}


// -----------------------------------------------------------

// ********* Lecture 10 : Equality Operator ************

// -----------------------------------------------------------

const age = '18';
if(age === 18){
    console.log("Congrats! You are an adult(STRICT!)");
}

if(age==18) console.log("Congrates ! you are an adult(LOOSE)");

const favorite = Number(prompt("What's your favorite number ?"));//prompt("What's your favorite number ?");
console.log(favorite);
console.log(typeof favorite);
if(favorite === 23){
    console.log("COOL! 23 is an amazing number");
}
else  if(favorite === 56){
    console.log("COOL! 56 is also an amazing number");
}
else if(favorite === 12 ){
    console.log("12 is also an amazing number");
}
else{
    console.log("we didn't found any match of an amazing number");
}

if(favorite !== 23){
    console.log("Why not 23 ?");
}

