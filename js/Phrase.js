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
            $('#phrase ul').appendChild('li');
        }
        
        if (this.checkLetter()) {
            this.showMatchedLetter();
        }
    }

    checkLetter() {
        document.addEventListener('keydown', e => {
            for (let i = 0; i < this.phrase.length; i++) {
                if (this.phrase[i] === e.key) {
                    return true;
                }
            }
            return false;
        });
    }

    showMatchedLetter() {
        document.addEventListener('keyup', e => {
            let matchedLetter = document.getElementsByClassName(`${e.key}`);
            for (let i = 0; i < matchedLetter.length; i++) {
                matchedLetter[i].classList.remove('hide');
                matchedLetter[i].classList.add('show');
            }
        });
    }
}