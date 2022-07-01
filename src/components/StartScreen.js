import './StartScreen.css';

import { GiPlayButton } from "react-icons/gi";

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
      <img src='./logo.png' className="logo" alt="logo" width="45%"/>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar </p>
      <div className="btnS">
      <button onClick={startGame}><GiPlayButton/>Começar</button>
      </div>
    </div>
  )
};

export default StartScreen;