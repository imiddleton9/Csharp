const resultText = document.getElementById('result-text');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

const choices = ['rock', 'paper', 'scissors'];

const updateScores = () => {
  playerScoreText.textContent = `Player: ${playerScore}`;
  computerScoreText.textContent = `Computer: ${computerScore}`;
};

const playRound = (playerChoice) => {
  if (playerScore === winningScore || computerScore === winningScore) {
    resultText.textContent = `Game over!`;
    return;
  }

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    resultText.textContent = `It's a draw! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
  } else {
    resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
  }

  updateScores();

  if (playerScore === winningScore) {
    resultText.textContent = `Congratulations! You are the overall winner!`;
  } else if (computerScore === winningScore) {
    resultText.textContent = `Sorry, the computer is the overall winner.`;
  }
};

// Example: Adding event listeners to the choice buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
