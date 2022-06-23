import { useState, useRef } from "react";

import {  GiPlayButton, GiSecretBook, GiPointing, GiRead, GiBowman } from "react-icons/gi";

// styles
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };

  return (
    <div className="game">
    
      <p className="points">
        <span>< GiPointing />Pontuação</span>: {score}
      </p>
      <h1><GiSecretBook/>Advinhe a palavra:</h1>
      <h3 className="tip"><GiRead/>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p><GiBowman/>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">

        <form onSubmit={handleSubmit}>
          <div>
        <label>Tente adivnhar uma letra da palavra:</label>
          <input
            type="text"
            name="letter"
            maxLength="1"
            onChange={(e) => setLetter(e.target.value)}
            required
            value={letter}
            ref={letterInputRef}
          />
          </div>
         <button>Jogar! <GiPlayButton/></button>
        </form>
        
      </div>
      <div className="wrongLettersContainer">
        <div className="wrongLettersContainer2">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Game;