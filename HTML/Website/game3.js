document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const restartButton = document.getElementById('restart');
    const startButton = document.getElementById('start');
    const victoryDisplay = document.getElementById('victory');
    const timerDisplay = document.getElementById('timer');
    const words = ['unicorn1', 'unicorn2', 'rainbow1', 'rainbow2', 'star1', 'star2', 'heart1', 'heart2', 'moon1', 'moon2', 'cloud1', 'cloud2'];
    let flippedCards = [];
    let matchedPairs = 0;
    let gameStarted = false;
    let timerInterval;
    let secondsElapsed = 0;

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const createBoard = () => {
        shuffleArray(words);
        for (let i = 0; i < words.length; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.name = words[i];
            card.innerHTML = `<div class="front"></div><div class="back"><img src="${words[i]}.png" alt="${words[i]}"></div>`;
            grid.appendChild(card);
        }
    };

    const showVictory = () => {
        clearInterval(timerInterval);
        setTimeout(() => {
            victoryDisplay.classList.remove('hidden');
        }, 1000);
    };

    const startGame = () => {
        if (!gameStarted) {
            gameStarted = true;
            timerInterval = setInterval(updateTimer, 1000);
        }
    };

    const updateTimer = () => {
        secondsElapsed++;
        timerDisplay.textContent = `Time: ${secondsElapsed}s`;
    };

    const flipCard = e => {
        const clickedCard = e.target.closest('.card');
        if (clickedCard && !clickedCard.classList.contains('flipped') && flippedCards.length < 2) {
            clickedCard.classList.add('flipped');
            flippedCards.push(clickedCard);
            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    };

    const checkForMatch = () => {
        const [card1, card2] = flippedCards;
        if (card1.dataset.name === card2.dataset.name) {
            matchedPairs++;
            if (matchedPairs === words.length / 2) {
                showVictory();
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }
        flippedCards = [];
    };

    const restartGame = () => {
        grid.innerHTML = '';
        flippedCards = [];
        matchedPairs = 0;
        gameStarted = false;
        clearInterval(timerInterval);
        secondsElapsed = 0;
        timerDisplay.textContent = 'Time: 0s';
        victoryDisplay.classList.add('hidden');
        createBoard();
    };

    grid.addEventListener('click', flipCard);
    restartButton.addEventListener('click', restartGame);
    startButton.addEventListener('click', startGame);

    createBoard();
});
