import { useCallback, useEffect, useState } from "react";

import logo from './logo.svg';
import './App.css';

// data  
import { wordsList } from "./data/words";

// components
import StartScreen from "./components/StartScreen"
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id:3, name: "end"},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // starts the secrets word game
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // restarts the game 
  const retry = () => {
    setGameStage(stages[2].name);
  }

 
  return (
    <div className="App">
      <header className="App-header">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
        {gameStage === 'end' && <GameOver retry={retry} />}
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    </div>
  );
}

export default App;
