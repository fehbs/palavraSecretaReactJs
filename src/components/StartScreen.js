import './StartScreen.css';

import { GiPowerButton, GiPlayButton } from "react-icons/gi";



const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
      <img src='./logo.png' className="logo" alt="logo" width="45%"/>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar <GiPowerButton /></p>
      <button onClick={startGame}>Começar o jogo <GiPlayButton/></button>
    </div>
  )
};

export default StartScreen;