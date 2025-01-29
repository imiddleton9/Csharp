import React, { useState } from 'react';
import './HalloweenTicTacToe.css'; // Import the CSS file for styling

const HalloweenTicTacToe = () => {
  // State variables to track the game board, current player, and game status
  const [board, setBoard] = useState(Array(16).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('🎃');
  const [gameActive, setGameActive] = useState(true);

  // Function to handle player moves
  const makeMove = (index) => {
    if (board[index] !== '' || !gameActive) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    checkWinner();
  };

  // Function to check for a winner or draw
  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], // Rows
      [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], // Columns
      [0, 5, 10, 15], [3, 6, 9, 12] // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c, d] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d]) {
        alert(`Player ${currentPlayer} Wins! 🎉`);
        setGameActive(false);
        return;
      }
    }

    if (!board.includes('')) {
      alert(`It's a Spooky Draw! 👻`);
      setGameActive(false);
    }

    setCurrentPlayer(currentPlayer === '🎃' ? '👻' : '🎃');
  };

  // Function to reset the game
  const resetGame = () => {
    setBoard(Array(16).fill(''));
    setCurrentPlayer('🎃');
    setGameActive(true);
  };

  // Render the game board
  return (
    <div>
      <h1>Halloween Tic Tac Toe</h1>
      <div id="game-board" className="game-board">
        {board.map((cell, index) => (
          <div key={index} className={`cell ${cell ? 'taken' : ''}`} onClick={() => makeMove(index)}>
            {cell}
          </div>
        ))}
      </div>
      <h2 id="status"></h2>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default HalloweenTicTacToe;
