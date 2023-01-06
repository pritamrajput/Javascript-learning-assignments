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