let board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
let currentPlayer = '🎃'; // Pumpkin symbol for Player X
let gameActive = true;

const makeMove = (cell, index) => {
    if (board[index] !== '' || !gameActive) {
        return;
    }
    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    cell.classList.add('taken');
    checkWinner();
};

const checkWinner = () => {
    const winningCombinations = [
        [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], // Rows
        [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], // Columns
        [0, 5, 10, 15], [3, 6, 9, 12] // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c, d] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d]) {
            document.getElementById('status').innerText = `Player ${currentPlayer} Wins! 🎉`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes('')) {
        document.getElementById('status').innerText = 'It\'s a Spooky Draw! 👻';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === '🎃' ? '👻' : '🎃';
};

const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    currentPlayer = '🎃';
    gameActive = true;
    document.getElementById('status').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('taken');
    });
};
