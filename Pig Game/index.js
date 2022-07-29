'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const hold = document.querySelector('.btn--hold');
const roll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
score0El.textContent = 0;
score1El.textContent = 0;
currentScore0El.textContent = 0;
currentScore1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let score = [0,0];
let playing = true;
const newOne = function(){
    score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
currentScore1El.textContent = 0;

  diceEl.classList.add('hidden');
  
  player0El.classList.remove('player--winner');
  console.log('done');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
newOne();
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
player.classList.toggle('.player--active');
player1El.classList.toggle('.player--active');
    console.log(activePlayer);
    
    // if(activePlayer === 0){
    //     activePlayer = 1;
    // }
    // else{
    //     activePlayer = 0;
    // }
};
roll.addEventListener('click', function(){
     let dice =  Math.trunc(Math.random() * 6) + 1;
   
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
currentScore = currentScore + dice;
if(dice !== 1){


    document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
    console.log(activePlayer);
}
else{
   switchPlayer();
}
});
hold.addEventListener('click', function(){
score[activePlayer] = score[activePlayer] + currentScore;
if(playing){
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    if(score[activePlayer] >= 20){
        playing = false;
        diceEl.classList.add('hidden');
  
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
          diceEl.classList.add('hidden');
    }
}
else{
    switchPlayer();
}
});
newGame.addEventListener('click', newOne);