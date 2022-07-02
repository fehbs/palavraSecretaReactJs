
import "./GameOver.css";

import { GiPlayButton, GiArrowWings} from "react-icons/gi";


const GameOver = ({ retry, score }) => {
  return (
    <div className="gameover">
      <div>
        <img src="./logo.png" alt="logo" width="15%" className="logo"></img>
      </div>
      <h1>Fim de jogo!</h1>
      <h2>
       <GiArrowWings size={40}
       color={'#84ba64'}
       /> A sua pontuação foi : <span>{score}</span>
      </h2>
      <div className="btnS">
      <button onClick={retry}><GiPlayButton size={35}/>Reiniciar</button>
      </div>
    </div>
  );
};

export default GameOver;
