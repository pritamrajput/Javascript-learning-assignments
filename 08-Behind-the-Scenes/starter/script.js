'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;
 
    function printAge(){
        let output = `${firstName} you are ${age}, born in ${birthYear}`;
        console.log(output);
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true
             
            // Creating NEW variable with the same name as outer scope's variable 
            const firstName = 'steven';

            // REASSIGNING outer scope's variable
            output = 'NEW OUTPUT!';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a+b;
            }
            console.log(add(2,3)); //Note:- This proves function are block scoped starting from ES6 but only when we use strict mode.
        }
        console.log(millenial);
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = "jonas";
calcAge(1992);