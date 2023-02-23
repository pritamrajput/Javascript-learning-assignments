// let promise = new Promise(function(resolve, reject){
//    alert("Hello");
//    resolve(56);
// });

// console.log("Hello world!");
// setTimeout(function(){
//     console.log("Hello Two in 2 seconds");
// },2000);

// console.log("My name is " + "Hello Three");
// console.log(promise);

let p = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(()=>{
        // console.log("I am a promise and I am resolved");
        resolve(true);
    },2000);
})

let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(()=>{
        // console.log("I am a promise and I am rejected");
        // resolve(true);
        reject(new Error("I am an error"))
    },2000);
})

p.then((value)=>{
    console.log(value);
})

p1.catch((error)=>{
    console.log("some error occured");
})

let promise = new Promise(resolve =>{
    setTimeout(()=>resolve("done"),1000);
});

promise.then(alert);
console.log(promise);