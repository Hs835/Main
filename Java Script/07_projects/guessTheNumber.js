let randomNumber = parseInt(Math.random()*100 +1);

const userInput = document.querySelector('#guessField');
const submit  = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const para = document.createElement('p');
let prevGuesses = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('Please enter a number more than 0')
    }else if(guess>100){
        alert('please enter a number equals to or less than 100')
    }else{
        prevGuesses.push(guess)
        if(numGuesses === 10){
            displayGuess(guess)
            displayMessage(`Game over number was ${randomNumber}`)
            endGame()
        }else { 
            checkGuess(guess)
            displayGuess(guess)
    }}
}

function checkGuess(guess) {
    if(guess>randomNumber){
        displayMessage('Guess Lower')
    }else if(guess<randomNumber){
        displayMessage('Guess Higher')
    }else if(guess === randomNumber){
        displayMessage('You Guessed It Right')
        endGame()
    }
}

function displayGuess(guess){
    userInput.value = ''
    
    ++numGuesses;
    console.log(numGuesses)
    guessSlot.innerHTML += `${guess} ,`
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    para.classList.add('button')
    para.innerHTML = '<h2 id ="newGame">New Game</h2>'
    startOver.appendChild(para);
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100 +1);
    prevGuesses = []
    numGuesses = 1
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(para);
    playGame = true
    
    })
}


