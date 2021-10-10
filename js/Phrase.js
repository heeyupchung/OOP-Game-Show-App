/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            let letter = document.createElement('li');
            letter.innerHTML = `${this.phrase[i]}`;
            if (this.phrase[i] === ' ') {
                letter.className = 'space';
            } else {
                letter.className = `hide letter ${this.phrase[i]}`;
            }
            $('#phrase ul').append(letter);
        }
    }

    checkLetter(letter) {
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === letter) {
                return true;
            }
        }
        return false;
    }

    showMatchedLetter(letter) {
        let matchedLetters = document.querySelectorAll('#phrase li');
        matchedLetters.forEach(matchedLetter => {
            if(letter === matchedLetter.innerHTML){
                matchedLetter.className = `show`;
            } 
        });
    }
}
