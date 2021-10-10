/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Code on'), 
            new Phrase('You got this'), 
            new Phrase('Never give up'), 
            new Phrase('Doing great'), 
            new Phrase('How are you') 
        ];
        this.activePhrase = null;
    }

    // starts the game
    startGame() {
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    // gets a random phrase from the 5 designated phrases
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    // this method handles the behavior of a button press
    handleInteraction(button) {

        // make it so that a button cannot be pressed twice
        button.disabled = true;

        // if the button is wrong, lose a life
        if (!this.activePhrase.checkLetter(button.innerHTML)) {
            button.className = 'wrong'; 
            this.removeLife();

        // if the button is right, show the letter and check if game is over
        } else {
            button.className = 'chosen'; 
            this.activePhrase.showMatchedLetter(button.innerHTML);
            if (this.checkForWin()) {
                this.gameOver();
            }
        }
    }

    // this method controls how lives are removed
    removeLife() {

        //replace the heart images with lost heart images
        let tries = document.getElementsByClassName('tries')[this.missed];
        tries.innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">';

        //increment how many lives lost and check if the game is over
        this.missed++;
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    // this method checks to see if there are no more letters to be guessed
    checkForWin() {
        const phrase = document.querySelectorAll('#phrase li.hide');
        let gameWon = false;

        // if there are no hidden letters, the game is over
        if(phrase.length === 0) {
            gameWon = true;
        }
        return gameWon;
    }

    // show that game is over either by win or loss
    gameOver() {
        $('#overlay').show();
        if (this.checkForWin()) {
            $('#game-over-message').text('You win!');
            $('.start').attr('class', 'win');
        } else {
            $('#game-over-message').text('Better luck next time!');
            $('.start').attr('class', 'lose');
        }
    }
}