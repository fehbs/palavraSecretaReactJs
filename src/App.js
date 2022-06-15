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

  const [pickedWord, setPickedWord] = useState('');
  const[pickedCategory, setPickedCategory] = useState('');
  const[letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words)
    const category =
     categories[Math.floor(Math.random() * Object.keys(categories).length)];

     console.log(category);
     
     //pick a random word
     const word =
      words[category]
      [Math.floor(Math.random() * words[category].length)];

      console.log(word);

      return {word, category};
  };

  // starts the secret word game
  const startGame = () => {
    // pick word and pick category
   const { word, category } = pickWordAndCategory();

   // create an array of letters
   let wordLetters = word.split('');

   wordLetters = wordLetters.map((l) => l.toLowerCase());

   console.log(word, category);
   console.log(wordLetters);

   // fill states
   setPickedWord(word);
   setPickedCategory(category);
   setLetters(letters);
   
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
