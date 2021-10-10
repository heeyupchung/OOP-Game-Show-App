/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
let heartImg = document.querySelectorAll('#scoreboard li');

$('#btn__reset').on('click', e => {
    game = new Game;
    document.querySelector('ul').innerHTML = '';

    game.startGame();
    document.querySelectorAll('#qwerty button').forEach(key => {
        key.className = 'key';
        key.disabled = 'false';
    });

    heartImg.forEach(heart =>{
        heart.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height=\"35\" width=\"30\">`;
    });
});

$('#qwerty').on('click', e => { 
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});