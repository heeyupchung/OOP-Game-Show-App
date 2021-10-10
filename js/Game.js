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

    startGame() {
        $('#overlay').hide();
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    handleInteraction(button) {
        button.disabled = true;
        if (!this.activePhrase.checkLetter(button.innerHTML)) {
            button.className = 'wrong'; 
            this.removeLife();
        } else {
            button.className = 'chosen'; 
            this.activePhrase.showMatchedLetter(button.innerHTML);
            if (this.checkForWin()) {
                this.gameOver();
            }
        }
    }

    removeLife() {
        const newSrc = "images/lostHeart.png";
        $('img[src="images/liveHeart.png"]')[this.missed].attr('src', newSrc); // not sure about using attr for this

        this.missed++;
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    checkForWin() {
        const phrase = document.querySelectorAll('#phrase li.hide');
        let gameWon = false;
        if(phraseElement.length === 0) {
            gameWon = true;
        }
        return gameWon;
    }

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