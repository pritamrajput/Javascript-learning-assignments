'use strict';

// console.log(document.querySelector('.message').textContent); 

// document.querySelector('.message').textContent = '🎉Correct Number!';

// document.querySelector('.number').textContent = '13';
// document.querySelector(".score").textContent = '10';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random()*20 )+1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;
// IMP NOTE : We could have also stored score in the DOM and to do that we just read the value right from the DOM and than we decrease the value and than write back to the DOM but then we would not have the value in our Code. so our application would not have any way of knowing the score at all point of time. so its always good to have a variable which stores the data in our code and not just rely on the DOM to hold our Data.
//The variable "score" is also called a state variable. because this variable is a part of application state, which is all the data that is relevant to the application.

document.querySelector('.check').addEventListener('click', function (){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    //When no number
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number';
    }

    //When a player wins
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!'; 
        const body = document.querySelector("body");

    //Note : whenever we manipulating style with the help of javascript we always specify a string.
        body.style.backgroundColor = '#60b347' ;
    // Note : The styles we apply using javascript are "inline styles"
        document.querySelector(".number").style.width = '30rem';
    }

    //When number is too high
    else if(guess > secretNumber){
       if(score>1){
        document.querySelector('.message').textContent = '📈 Too High!';
        score--;
        document.querySelector(".score").textContent = score;
       }
      else{
        document.querySelector('.message').textContent = '🔥you lost the Game!';
        document.querySelector(".score").textContent = '0';
      }  
    }

    //When number is too low
    else if(guess < secretNumber){
       
        if(score>1){
            document.querySelector('.message').textContent = '📉 Too Low!'; 
            score--;
            document.querySelector(".score").textContent = score;
           }
          else{
            document.querySelector('.message').textContent = '🔥you lost the Game!';
            document.querySelector(".score").textContent = '0';
          }  

    }
})