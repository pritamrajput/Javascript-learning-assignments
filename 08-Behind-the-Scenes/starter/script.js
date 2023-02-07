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
console.log(this);


// This keyword inside a function
const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this);
}
calcAge(1995);

// This keyword inside an arrow function
const calcAgeArrow = (birthYear)=>{
    console.log(2037 - birthYear);
    console.log(this);
}
calcAgeArrow(1995)

// This keyword inside a method of an object

const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
    }
}

jonas.calcAge();

const matila = {
    year : 2017,
}

matila.calcAge = j 
matila.calcAge();

const f = jonas.calcAge ; // Copying the function to f variable as functions in javascript is just a value
f(); // This f() function is now just a regular function call it is not attached to any object. There is no owner of the f() function anymore. Therefore it will have 'this' keyword as undefined and this.year will give an error