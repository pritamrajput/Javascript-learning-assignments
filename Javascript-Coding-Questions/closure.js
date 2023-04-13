// function x(){
//     const i =1;
//     for(var r = 1;i<=5;r++){
//         setTimeout(function(){
//             console.log(r);
//         },r*1000);
//     }
// }
// x();

const orderPizza =()=>{
    console.log("calling Pizza shop...");
    setTimeout(()=>{
        console.log("call picked and order given🎉");
        console.log("wait for order to arrive");
        setTimeout(()=>{
            console.log("order arrived...");
            setTimeout(()=>{
               console.log("Payment done");
               console.log("You can eat Pizza🥳");
            },3000)
        },3000)
    },3000)
}

orderPizza();