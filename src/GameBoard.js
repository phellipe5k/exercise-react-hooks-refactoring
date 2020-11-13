import React, { useContext } from 'react';
import GameCell from './GameCell';
import './GameBoard.css';
import TicTacToeContext from './context/TicTacToeContext';

const GameBoard = () => {
  const { game, setGame } = useContext(TicTacToeContext);
  const { gameBoard } = game;

  const toggleActivePlayer = () => {
    const { activePlayer } = game;
    if (activePlayer === 1) return 2;
    return 1;
  }

  const onClick = (cellClicked) => {
    const newState = [...game.gameBoard];
    let newActivePlayer = game.activePlayer;

    if (game.gameBoard[cellClicked] === 0) {
      newState[cellClicked] = game.activePlayer;
      newActivePlayer = toggleActivePlayer();
    } else newState[cellClicked] = game.gameBoard[cellClicked];
    setGame(
    { 
    activePlayer: newActivePlayer,
    gameBoard: newState, 
    })
  }

    return (
      <div className="game-board">
        {gameBoard.map((playerId, i) => (
          <GameCell
            id={i}
            key={i}
            onClick={() => onClick(i)}
            content={playerId}
          />
        ))}
      </div>
    );
}

export default GameBoard;