'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    // Switch to next player.
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function(){

    if(playing){
    // 1. Generating a random dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if(dice!==1){
        // Adding dice to currentScore
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
       switchPlayer();
    }
}
})



btnHold.addEventListener('click', function(){
    if(playing){

   
   // 1. Add current score to active player's score
   scores[activePlayer] += currentScore;
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

   // 2. Check if player's score >= 100
   if(scores[activePlayer] >= 20){
    //Finish the game
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

   }
   else{
    switchPlayer();
   }
}
}) 

btnNew.addEventListener('click', function(){
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    playing = true;
    if(activePlayer === 1){
     document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');  
     document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
     document.querySelector(`.player--0`).classList.add('player--active');
    }
    else{
     document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    }
})