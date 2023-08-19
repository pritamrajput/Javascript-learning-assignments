"use strict";

function pizzaArrived(){
    console.log("Pizza arrived, you can eat pizza");
}

function whileWorking(){
    console.log("Feeling hungry while working");
 
    console.log("Ordering pizza");

    console.log("Work conti...");

    setTimeout(pizzaArrived,3000);
}

whileWorking();