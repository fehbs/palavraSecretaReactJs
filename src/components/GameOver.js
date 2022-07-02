
import "./GameOver.css";

import { GiPlayButton, GiArrowWings } from "react-icons/gi";
import LogoImg from "./LogoImage";

const GameOver = ({ retry, score }) => {

  return (

    <div className="gameover">
      <div>
        <LogoImg />
      </div>

      <h1>Fim de jogo!</h1>
      <h2>
        <GiArrowWings size={40}
          color={'#84ba64'}
        /> A sua pontuação foi : <span>{score}</span>
      </h2>

      <div className="btnS">
        <button onClick={retry}><GiPlayButton size={50} />Reiniciar</button>
      </div>

    </div>
  );
};

export default GameOver;
