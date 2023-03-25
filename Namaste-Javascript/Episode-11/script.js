'use strict';

// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Namaste Javascript");
// }

// function x(){
//     for(let i = 1; i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste Javascript");
// }
// x();

function x(){
for(var i = 1; i<=5;i++){
    function close(x){
        setTimeout(function(){
            console.log(x);
       }, x * 1000);
    }
   close(i);
}
    console.log("Namaste Javascript");
}
x();

// Named function expression
var a = function xyz(){
    console.log("Namaste javascript");
}
a();