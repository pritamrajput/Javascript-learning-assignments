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

// let promise = new Promise(function(resolve,reject){
//     let value = '';
//     if(value){
//         setTimeout(()=>{
//             resolve("Hurray! we have fetched the water");
//         },3000);
//     }
//     else{
//          reject(new Error('jack fell down from the hill and broke his crown. And jill came tumbling'));
//     }
   
// })

// const grandParentCooking = ()=>{
//     promise.then(result=>{
//         console.log(`Cooking food with ${result}`);
//     },).catch(reject=>{
//         console.log(reject);
//     })
// }

// grandParentCooking();

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
       resolve("call picked and order given");
    },3000)
})

function orderingPizza(){
    console.log("calling the pizza shop...");
    promise
    .then(data=>{
        console.log(data);
        return new Promise(function(resolve,reject){
             setTimeout(()=>{
                resolve("order given waiting for pizza to come")
             },3000)
        })
    })
    .then(data=>{
        console.log(data);
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                resolve("Pizza arrived you can enjoy the pizza")
            },3000)
        })
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log(error);
    })
}

orderingPizza();