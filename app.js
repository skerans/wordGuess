// As a user, I want to start the game by clicking on a button.

// As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.

// As a user, I want the game to be timed.

// As a user, I want to win the game when I have guessed all the letters in the word.

// As a user, I want to lose the game when the timer runs out before I have guessed all the letters.

// As a user, I want to see my total wins and losses on the screen.

// Specifications
// When a user presses a letter key, the user's guess should be captured as a key event.

// When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear.

// When a user wins or loses a game, a message should appear and the timer should stop.

// When a user clicks the start button, the timer should reset.

// When a user refreshes or returns to the brower page, the win and loss counts should persist.

// pull a random word <<done>>
// hide the word letter by letter
// set a timer to 10 seconds <<done>>
// when correct button is pressed, the letter appears on screen
// when time is up or all letters appear on screen round is over
// <<done>>
// mark total wins and losses

// set timer
let timeEl = document.querySelector(".time");

var startButton = document.getElementById("start");

document.addEventListener("keydown", keyDown)


let secondsLeft = true;
startButton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("button clicked");
  if(secondsLeft == 0 || secondsLeft == true){
  timer();
  }
});

function timer() {  
  secondsLeft = 10;
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft == 0) {
      clearInterval(timerInterval);
      timeEl.textContent = "Out of time";
    } else {

    }
  }, 1000);
}


let myWords = ["tomato", "potato", "cucumber", "zuccini", "carrot", "soap", "toothpaste", "eggs", "milk"];

let randWord = myWords[Math.floor(Math.random() * myWords.length)];

let wordArray = randWord.split("");
console.log(wordArray);


function keyDown(event) {
  let userChoice = event.key;
  console.log(userChoice);
}


// add li items for each letter in array
// make li items hidden
// 