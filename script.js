'use strict'

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20
let highScore = 0;
let play = true;

const scorePointer = document.querySelector('.score')
const secretNumberPointer = document.querySelector('div.number')
const highScorePointer = document.querySelector('span.highscore')
const guessedNumberPointer = document.querySelector('.guess')
const messagePointer = document.querySelector('.message')

document.querySelector('.check').addEventListener('click',() => {
    if(play!=true){
        return null
    }
    if(guessedNumberPointer.value.length<=0){
        messagePointer.textContent="Please guess the number first!"
    }
    else if(guessedNumberPointer.value <1 || guessedNumberPointer.value >20){
        messagePointer.textContent="Can only guess between 1 and 20"
    }
    else{
        if (secretNumber == guessedNumberPointer.value){
            play=false;
            secretNumberPointer.textContent=secretNumber

            replaceHighscore(score,highScore)
            messagePointer.textContent="Congratulations, you have guessed the number!"
            document.querySelector('body').style.backgroundColor = '#60b347';
        }
        else if(score<=1){
            play = false
            messagePointer.textContent="You lost the game :("
        }
        else{
            if(secretNumber>guessedNumberPointer.value){
                messagePointer.textContent="Guess higher!"
            }
            else {
                messagePointer.textContent="Guess lower!"
            }
            score-=1
            scorePointer.textContent=score
        }
    }
})

document.querySelector('.again').addEventListener('click',() => {
    play = true
    score=20
    scorePointer.textContent = score
    secretNumberPointer.textContent="?"
    messagePointer.textContent = "Start guessing..."
    guessedNumberPointer.value = null
    document.querySelector('body').style.backgroundColor = '#222';
    secretNumber = Math.floor(Math.random() * 20) + 1;
})

function replaceHighscore(current, highscore){
    if (current>highscore){
        highScore=current //change the actual var first
        highScorePointer.textContent=highScore
    }
}