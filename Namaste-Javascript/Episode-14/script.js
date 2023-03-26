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
 function attachEventListener(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Button clicked",++count);
        })
 }
 attachEventListener();