document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const scoreValue = document.getElementById('score-value');
    let score = 0;
    let gameRunning = true;

    function createHole() {
        const hole = document.createElement('div');
        hole.classList.add('hole');
        hole.addEventListener('click', () => {
            if (hole.classList.contains('mole') && gameRunning) {
                hole.classList.remove('mole');
                hole.classList.add('whacked');
                score++;
                scoreValue.textContent = score;
                if (score >= 10) {
                    endGame();
                }
            }
            peep(); // Call peep function after each click
        });
        return hole;
    }
    

    function randomTime(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomHole() {
        const holes = gameBoard.querySelectorAll('.hole:not(.mole)');
        const idx = Math.floor(Math.random() * holes.length);
        return holes[idx];
    }

    function peep() {
        if (gameRunning) {
            const hole = randomHole();
            if (hole) {
                hole.classList.add('mole');
                const time = randomTime(500, 1500); // Random time between 500ms and 1500ms
                setTimeout(() => {
                    hole.classList.remove('mole');
                    if (!hole.classList.contains('whacked')) {
                        peep(); // Call peep recursively
                    }
                }, time);
            }
        }
    }

    function endGame() {
        gameRunning = false;
        alert('Game over! Your final score is ' + score);
        // Reset the game board and score
        score = 0;
        scoreValue.textContent = score;
        const holes = gameBoard.querySelectorAll('.hole');
        holes.forEach(hole => {
            hole.classList.remove('mole', 'whacked');
        });
        // Restart the game after a delay (you can adjust the delay as needed)
        setTimeout(() => {
            gameRunning = true;
            peep(); // Start the game by calling peep
        }, 2000); // Restart after 2 seconds (2000 milliseconds)
    }
    

    for (let i = 0; i < 6; i++) {
        const hole = createHole();
        gameBoard.appendChild(hole);
    }

    peep(); // Start the game by calling peep
});
