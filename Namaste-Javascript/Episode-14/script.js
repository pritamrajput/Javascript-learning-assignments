'use strict';
// setTimeout(function (){
// console.log("Timer");
// },5000)

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// })



// without closures
//  var count = 0;
//  document.getElementById("clickMe").addEventListener("click",function xyz(){
//  console.log("Button clicked",++count);
//  })

 // With closures
//  function attachEventListener(){
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click",function xyz(){
//         console.log("Button clicked",++count);
//         })
//  }
//  attachEventListener();

// Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”  otherwise just print the number.
 
const fizz = [];
const buzz = [];
const fizzBuzz = [];
const normal = []

for(let i = 1;i<=100;i++){
   if(i%3 === 0 && i%5!==0){
    console.log("Fizz",i);
    fizz.push(i);
   }
  else if(i%5 === 0 && i%3 !==0){
    console.log("Buzz",i);
    buzz.push(i);
  }
  else if(i%3===0 && i%5==0){
    console.log("Fizz Buzz",i);
    fizzBuzz.push(i);
  }
  else{
    console.log(i);
    normal.push(i);
  }
}

function printArray(myArr){
    for(let i = 0;i<myArr.length;i++){
        console.log(myArr[i]); 
     } 
}

console.log("The output of the fizz is");
// for(let i = 0;i<fizz.length;i++){
//    console.log(fizz[i]); 
// }
printArray(fizz)
console.log("The output of the buzz is");
printArray(buzz);
console.log(fizzBuzz);
console.log(normal);