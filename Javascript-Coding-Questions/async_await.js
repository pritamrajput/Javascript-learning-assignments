"use strict";
function getData(){
    return  new Promise(function(resolve, reject){
       setTimeout(()=>{
        resolve(46);
       },1)
    })
}

let promise;
async function result(){
  promise = await getData();
  console.log(promise);
};

// function result2(){
//   console.log(getData().then(result=>{
//     console.log(result);
//   }));
// }
result();
// result2();
console.log(fetch("hello"));