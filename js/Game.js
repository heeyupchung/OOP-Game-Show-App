/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed = 0, activePhrase = null) {
        this.missed = missed;
        this.phrases = [
            new Phrase('Code on'), 
            new Phrase('You got this'), 
            new Phrase('Never give up'), 
            new Phrase('Doing great'), 
            new Phrase('How are you') 
        ];
        this.activePhrase = this.getRandomPhrase;
    }

    startGame() {

    }

    getRandomPhrase() {

    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
}