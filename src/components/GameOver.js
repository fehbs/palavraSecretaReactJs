
import "./GameOver.css";

import { GiPlayButton, GiArrowWings} from "react-icons/gi";


const GameOver = ({ retry, score }) => {
  return (
    <div className="gameover">
      <div>
        <img src="./logo.png" alt="logo" width="35%"></img>
      </div>
      <h1>Fim de jogo!</h1>
      <h2>
       <GiArrowWings/> A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}><GiPlayButton/>Reiniciar</button>
    </div>
  );
};

export default GameOver;
