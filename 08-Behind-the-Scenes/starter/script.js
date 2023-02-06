'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;
 
    function printAge(){
        let output = `${firstName} you are ${age}, born in ${birthYear}`;
        console.log(output);
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true
             
            // Creating NEW variable with the same name as outer scope's variable 
            const firstName = 'steven';

            // REASSIGNING outer scope's variable
            output = 'NEW OUTPUT!';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a+b;
            }
            console.log(add(2,3)); //Note:- This proves function are block scoped starting from ES6 but only when we use strict mode.
        }
        console.log(millenial);
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = "jonas";
calcAge(1992);

// Lecture 95: Hoisting in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
// Note :- The only function we can use before declaration is function declaration
console.log(addDecl(2,3));
console.log(addExpr);
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a,b){
    return a + b;
}

var addExpr = function(a,b){
    return a + b;
}

var addArrow = () => {
    return a + b;
}


// Example on pitfalls of hoisting
console.log(numProducts);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All Products deleted');
}