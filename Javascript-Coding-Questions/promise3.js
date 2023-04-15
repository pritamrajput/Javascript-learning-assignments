'use strict';
 
// let promise = new Promise(function(resolve,reject){
//     resolve("water")
// })
// console.log(promise.then(data=>{
//     return new Promise(function(resolve,reject){
//         resolve(data);
//     });
// }).then(data=>{
//     console.log(`The promise is resolved with the data ${data}`);
// }));

let promise = new Promise(function(resolve,reject){
    let value = 'water';
    if(value){
        setTimeout(()=>{
            resolve("Hurray! we have fetched the water");
        },3000);
    }
    else{
         reject(new Error())
    }
   
})

const grandParentCooking = ()=>{
    promise.then(result=>{
        console.log(`Cooking food with ${result}`);
    },).catch(reject=>{
        console.log(reject);
    })
}

grandParentCooking();