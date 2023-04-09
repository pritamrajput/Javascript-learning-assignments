const arr = [5,1,3,2,6];

// function double(x){
//     return x*2;
// }

// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(double);
// const output1 =  arr.map(triple);
// const output2 =  arr.map(binary);
// console.log(output);
// console.log(output1);
// console.log(output2);


// Filter ODD values
// const output = arr.filter(function(x){
//     return x % 2 !==0;
// })

// Filter EVEN values
// const output1 = arr.filter(function(x){
//     return x % 2 === 0 ;
// })

// Filter values greate than 4
// const output2 = arr.filter(function(x){
//     return x > 4;
// })
// console.log(output);
// console.log(output1);
// console.log(output2);

//sum or max without using reduce method
function arrSum(arr){
 let sum = 0;
 for(let i = 0;i<arr.length;i++){
    sum =  sum + arr[i];
 }
 return sum;
}

console.log(arrSum(arr));

// Sum of element inside the array with REDUCE
const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0)
console.log(output);

// To find max value from the given array wihtout reduce method

function findMax(arr){
    let max = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

// Find max with reduce method

const output1 = arr.reduce(function(acc,curr){
    if(curr>acc){
        acc = curr
    }
    return acc;
},0)

console.log(output1);