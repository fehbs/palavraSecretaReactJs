import "./GameOver.css";

import { GiPlayButton, GiArrowWings} from "react-icons/gi";

import { BsToggleOff } from "react-icons/bs";

const GameOver = ({ retry, score }) => {
  return (
    <div className="gameover">
      <h1>Fim de jogo!< BsToggleOff /></h1>
      <h2>
       <GiArrowWings/> A sua pontuação foi: <span>{score}</span>!
      </h2>
      <button onClick={retry}>Reiniciar<GiPlayButton/></button>
    </div>
  );
};

export default GameOver;
