import React, { useState } from 'react';
import TicTacToeContext from './TicTacToeContext';

const Provider = ({ children }) => {
const defaultValue = {
  activePlayer: 1,
  gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
}
const [game, setGame] = useState(defaultValue)

const contextValue = {
  game,
  setGame
}

  return (
    <TicTacToeContext.Provider value={contextValue}>
      { children }
    </TicTacToeContext.Provider>
  );
};

export default Provider;
