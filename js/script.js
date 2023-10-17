const guessed = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const guessesRemaining = document.querySelector(".remaining");
const guessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia";
const guessedLetters = [];

//display symbols as placeholders for chosen word's letters
const placeHolder = function (word) {
    const placeHolderLetters = []; //empty array as user will input letters and we're holding space
    for (const letter of word) { 
        console.log(letter);
        placeHolderLetters.push("●");
    } //for of array that loops through the letters of the word
    wordProgress.innerText = placeHolderLetters.join(""); //joining the word progress to the placeholder string
};

placeHolder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault(); //prevents the default action of form submitting, reloading page
    message.innerText = "";
    const guess = letterInput.value;
    //console.log(guess);
    letterInput.value = "";
    const goodGuess = validate(guess);
});

const validate = function (letterInput) {
    const acceptedLetter = /[a-zA-Z]/;
    if (letterInput.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (letterInput.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!letterInput.match(acceptedLetter)) {
        message.innerText = "Please enter a letters from A to Z.";
    } else {
        return letterInput;
    }
};

makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter, silly. Try again.";
      } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
      }
    };