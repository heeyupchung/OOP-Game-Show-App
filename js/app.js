/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// initialize game to use for later
let game;

// initialize heart images to reset lives at the beginning of each game
let heartImg = document.querySelectorAll('#scoreboard li');

// event listener for clicking the start game button
$('#btn__reset').on('click', e => {
    // instantiate new game object
    game = new Game;

    // reset ul element, clearing previous li elements
    document.querySelector('ul').innerHTML = '';
    game.startGame();

    // reset each selected key from the previous game
    document.querySelectorAll('#qwerty button').forEach(key => {
        key.className = 'key';
        key.disabled = false;
    });

    // reset lives
    heartImg.forEach(heart =>{
        heart.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height=\"35\" width=\"30\">`;
    });
});

// listens for clicks on buttons and not the space around it
$('#qwerty button').on('click', e => { 
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});