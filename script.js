'use strict'

class GuessGame {
    constructor(minNumber, maxNumber, guessRemaining){
        this.minNumber=minNumber
        this.maxNumber=maxNumber
        this.guessRemaining=guessRemaining
        
    }
    highscore = 0
    isPlaying = true
    guessedNumber = null
    replaceHighscore(current){
        if (current>this.highscore){
            this.highscore=current
            document.querySelector('span.highscore').textContent=current
        }
    }
    replaceScoreText(text){
        document.querySelector('.score').textContent=text
    }
    replaceSecretNumberText(text){
        document.querySelector('div.number').textContent=text
    }
    replaceMessageText(text){
        document.querySelector('.message').textContent=text
    }
    replaceGuessedNumber(value){
        this.guessedNumber=value
    }
    startGame(){
        game.isPlaying = true
        this.replaceMessageText("Start Guessing")
        this.secretNumber = Math.floor(Math.random() * this.maxNumber) + 1;
        this.score = this.guessRemaining
        this.replaceScoreText(this.score)
        this.replaceSecretNumberText("?")
    }
}

const game = new GuessGame(1,5,10)

game.startGame()

document.querySelector('.check').addEventListener('click',() => {
    game.guessedNumber=document.querySelector('.guess').value
    if(game.isPlaying!=true){
        return null
    }
    if(game.guessedNumber.length<=0){
        game.replaceMessageText("Please guess the number first!")
    }
    else if(game.guessedNumber < game.minNumber || game.guessedNumber > game.maxNumber){
        game.replaceMessageText(`Can only guess between ${game.minNumber} and ${game.maxNumber}`)
    }
    else{
        if (game.secretNumber == game.guessedNumber){
            game.isPlaying=false;
            game.replaceSecretNumberText(game.secretNumber)
            game.replaceHighscore(game.score)
            game.replaceMessageText("Congratulations, you have guessed the number!")
            document.querySelector('body').style.backgroundColor = '#60b347';
        }
        else if(game.score<=1){
            game.isPlaying = false
            game.replaceHighscore("You lost the game :(")
        }
        else{
            if(game.secretNumber>game.guessedNumber){
                game.replaceMessageText("Guess higher!")
            }
            else {
                game.replaceMessageText("Guess lower!")
            }
            game.score-=1
            game.replaceScoreText(game.score)
        }
    }
})

document.querySelector('.again').addEventListener('click',() => {
    game.startGame()
    game.replaceGuessedNumber(null)
    document.querySelector('body').style.backgroundColor = '#222';
})