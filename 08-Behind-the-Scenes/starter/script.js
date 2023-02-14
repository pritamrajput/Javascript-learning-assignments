'use strict';

// function calcAge(birthYear){
//     const age = 2037 - birthYear;
 
//     function printAge(){
//         let output = `${firstName} you are ${age}, born in ${birthYear}`;
//         console.log(output);
//         if(birthYear >= 1981 && birthYear <= 1996){
//             var millenial = true
             
//             // Creating NEW variable with the same name as outer scope's variable 
//             const firstName = 'steven';

//             // REASSIGNING outer scope's variable
//             output = 'NEW OUTPUT!';
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b){
//                 return a+b;
//             }
//             console.log(add(2,3)); //Note:- This proves function are block scoped starting from ES6 but only when we use strict mode.
//         }
//         console.log(millenial);
//         console.log(output);
//     }
//     printAge();
//     return age;
// }

// const firstName = "jonas";
// calcAge(1992);

// // Lecture 95: Hoisting in Practice

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// // Note :- The only function we can use before declaration is function declaration
// console.log(addDecl(2,3));
// console.log(addExpr);
// // console.log(addExpr(2,3));
// // console.log(addArrow(2,3));

// function addDecl(a,b){
//     return a + b;
// }

// var addExpr = function(a,b){
//     return a + b;
// }

// var addArrow = () => {
//     return a + b;
// }


// // Example on pitfalls of hoisting
// console.log(numProducts);
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart(){
//     console.log('All Products deleted');
// }

// Lecture 97 This keyword in practice

// This keyowrd on global object
// console.log(this);


// // This keyword inside a function
// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAge(1995);

// // This keyword inside an arrow function
// const calcAgeArrow = (birthYear)=>{
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(1995)

// // This keyword inside a method of an object

// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }

// jonas.calcAge();

// const matila = {
//     year : 2017,
// }

// matila.calcAge = j 
// matila.calcAge();

// const f = jonas.calcAge ; // Copying the function to f variable as functions in javascript is just a value
// f(); // This f() function is now just a regular function call it is not attached to any object. There is no owner of the f() function anymore. Therefore it will have 'this' keyword as undefined and this.year will give an error



// Lecture 98 Regular function vs Arrow function

// var firstName = "Matilda"
const jonas = {
    firstName : "jonas",
    year : 1991,
    calcAge :  function(){
        // console.log(this);
        console.log(2037 - this.year);

        // Problem using this keyword inside isMillenial function
    //   const isMillenial = function(){
    //     console.log(this);
    //     console.log(this.year >= 1981 && this.year <= 1996);
    //   };

    // Solution 1
    // const self = this; //self or that
    // const isMillenial = function(){
    //         console.log(self);
    //         console.log(self.year >= 1981 && self.year <= 1996);
    //       };
    //  isMillenial();
    // },

    // solution 2 using arrow function
    const isMillenial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
      };
 isMillenial();
},

    greet:function(){
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    } 
}
jonas.calcAge();

jonas.greet();


// Arguments keyword
const addExpr = function(a,b){
    console.log(arguments);
    return a + b;
};
addExpr(2,5);

addExpr(2,5,8,11,9,5); //It is completely legal to add more arguments inside a function call.

var addArrow = (a,b) => {
    // console.log(arguments); // Note: This statement will give an error tha arguments is not defined because Arrow function does not get "arguments" keyword.
    return a + b;
};

addArrow(2,5,8);



// ----- Lecture 99 :- Primitive vs Objects (Primitive vs Reference types)-----

const arr1 = [1,3,7,4];
const arr2 = Object.assign([],arr1);
arr2[2] = 78;
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name:'jonas',
    age:30
}

const friend = me;
friend.age = 27;
console.log(me);
console.log(friend);

//Lecture 100 Primitive vs Objects in practice

// Primitive types
let lastName = 'williams';
let oldName = lastName;
lastName = 'Davis';
console.log(lastName,oldName);


//Reference types
const jessica = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage',jessica);
console.log('After marriage', marriedJessica);
// marriedJessica = {};

// Copying objects

const jessica2 = {
    firstName: "jessica",
    lastName : "Williams",
    age : 29,
    family : ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({},jessica2);
jessicaCopy.lastName = "Davis";
console.log('Before marriage:',jessica2);
console.log('After marriage',jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Tino');

console.log('Before marriage:',jessica2);
console.log('After marriage',jessicaCopy);