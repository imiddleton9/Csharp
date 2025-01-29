// List of words and hints for the game
const wordsWithHints = [
    { word: "javascript", hint: "The language used for web development." },
    { word: "html", hint: "The standard markup language for creating web pages." },
    { word: "css", hint: "Used for styling and layout of web pages." },
    { word: "programming", hint: "The process of designing and building an executable computer program." },
    { word: "challenge", hint: "Something that tests one's abilities or resources." },
    { word: "gpt", hint: "An advanced language model developed by OpenAI." }
];

// Select a random word and hint
let randomIndex = Math.floor(Math.random() * wordsWithHints.length);
let randomWord = wordsWithHints[randomIndex].word;
let hint = wordsWithHints[randomIndex].hint;

// DOM elements
const hintText = document.getElementById("hintText");
const wordLength = document.getElementById("wordLength");
const userInput = document.getElementById("userInput");
const resultMessage = document.getElementById("result");
const scoreValue = document.getElementById("scoreValue");
const guessedList = document.getElementById("guessedList");

let score = 0;

// Display hint, word length, and initial score
hintText.textContent = hint;
wordLength.textContent = `Word length: ${randomWord.length} letters`;
scoreValue.textContent = score;

// Check user's guess
function checkGuess() {
    const userGuess = userInput.value.toLowerCase();

    if (userGuess === randomWord) {
        resultMessage.textContent = "Congratulations! You guessed the correct word.";
        resultMessage.style.color = "#2ecc71"; // Green color
        score++;
        scoreValue.textContent = score;
        addToGuessedList(randomWord);
        setTimeout(restartGame, 2000);
    } else {
        resultMessage.textContent = "Wrong guess. Try again.";
        resultMessage.style.color = "#e74c3c"; // Red color
    }
}

// Restart the game
function restartGame() {
    userInput.value = "";
    resultMessage.textContent = "";
    randomIndex = Math.floor(Math.random() * wordsWithHints.length);
    randomWord = wordsWithHints[randomIndex].word;
    hint = wordsWithHints[randomIndex].hint;
    hintText.textContent = hint;
    wordLength.textContent = `Word length: ${randomWord.length} letters`;
}

// Add guessed word to the list
function addToGuessedList(word) {
    const listItem = document.createElement("li");
    listItem.textContent = word;
    guessedList.appendChild(listItem);
}
