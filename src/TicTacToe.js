import React, { useContext } from 'react';
import TicTacToeContext from './context/TicTacToeContext';
import GameBoard from './GameBoard';
import { 
  victoryArchivedInLine,
  victoryArchivedInColumn,
  victoryArchivedInDiagonals 
} from './gameLogic';

const TicTacToe = () => {
  const { game, setGame } = useContext(TicTacToeContext);
  const { gameBoard } = game;

  const resetGame = () => {
    setGame({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    })
  }

  const victoryArchieved = () => {
    return (
      victoryArchivedInLine(gameBoard)
      || victoryArchivedInColumn(gameBoard)
      || victoryArchivedInDiagonals(gameBoard)
    );
  }

  const renderButton = () => {
    return (
      <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  }
    const win = victoryArchieved();
    if (!gameBoard.includes(0)) {
      return (
        <>
          {renderButton()}
          <h1>Empate</h1>
        </>
      );
    }
    return (
      <>
        {renderButton()}
        {(!win)
          ? (
            <GameBoard />
          )
          : <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>}
      </>
    );
}

export default TicTacToe;
