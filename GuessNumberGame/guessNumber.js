const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')

const startOver = document.querySelector('.resultParas')
const lowOrHi = document.querySelector('.lowOrHi')

let prevGuesses =[]
let numGuess=0

let randomNumber = parseInt(Math.random()*100+1)
let maxGuesses =10


submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
})

function validateGuess(guess){
    prevGuesses.push(guess)
    if(prevGuesses.length > maxGuesses)
    {
        //game over
        dispalyGuesses(guess)
        displayMsg(`Game Over Number Was ${randomNumber}`)
        endGame()

    }
    else{
        dispalyGuesses(guess)
        checkGuess(guess)
    }
}



function dispalyGuesses(guess){
    guessSlot.innerHTML += `${guess}, `
    userInput.value=''
    numGuess++;   

    let remainingGuesses= maxGuesses-numGuess
    if(remainingGuesses <0){
        remainingGuesses=0
    }
    remaining.innerHTML = remainingGuesses
}


function displayMsg(message){
    lowOrHi.innerHTML =`<h1>${message}</h1>`
}


function checkGuess(guess){

    if(guess === randomNumber){
        displayMsg("You Guessed correctLy!")
    }else if(guess<randomNumber){
          displayMsg('To Low! Try a higher number')
    }
    else{
        displayMsg('To High! Try a lower number')
    }
}


const paraEl= document.createElement('p')
function endGame(){
    userInput.value=''
    paraEl.classList.add('button')
    paraEl.style.cursor = "pointer"
    paraEl.innerHTML = `<h2 id ='newGame'>Reload page & Start New Game</h2>`

    startOver.append(paraEl)
    userInput.disabled = true
    submit.disabled = true
    
}


function newGame(){
    location.reload();
}