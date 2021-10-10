/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    // Adds placeholders for letters to the display when the game starts
    addPhraseToDisplay() {

        // iterates through the number of letters of a phrase and creates li elements per letter
        for (let i = 0; i < this.phrase.length; i++) {
            let letter = document.createElement('li');
            letter.innerHTML = `${this.phrase[i]}`;

            //differentiates between spaces and letters for game to display properly
            if (this.phrase[i] === ' ') {
                letter.className = 'space';
            } else {
                letter.className = `hide letter ${this.phrase[i]}`;
            }

            //adds each letter li to the ul
            $('#phrase ul').append(letter);
        }
    }

    // checks if the selected letter is in the phrase
    checkLetter(letter) {
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === letter) {
                return true;
            }
        }
        return false;
    }

    // shows the letter that was correctly guessed on the display
    showMatchedLetter(letter) {

        // select all the letters in the phrase
        let matchedLetters = document.querySelectorAll('#phrase li');

        // check if any of them match with the letter guessed, and if so show them on display
        matchedLetters.forEach(matchedLetter => {
            if(letter === matchedLetter.innerHTML){
                matchedLetter.className = `show`;
            } 
        });
    }
}
