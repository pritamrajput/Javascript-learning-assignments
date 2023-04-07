'use strict';

const radius = [2,1,3,5];


const area = (radius) => {
   return Math.PI * radius * radius ; 
}


const calculate = function(radius, logic){
    const output = [];
    for(let i = 0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }

    return output;
}

console.log(calculate(radius,area));

// const area = function(radius){
//     const output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }

//     return output;
// }
// console.log(area(radius));

// const circumference = function(radius){
//     const output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }

// console.log(circumference(radius));