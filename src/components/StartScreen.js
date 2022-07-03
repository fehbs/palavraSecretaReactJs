import './StartScreen.css';

import LogoImg from './LogoImage';

import { GiPlayButton } from "react-icons/gi";

const StartScreen = ({ startGame }) => {

  return (

    <div className='start'>

      <LogoImg className='logoIcon' />

      <h1>Palavra Secreta</h1>

      <p>Clique no botão abaixo para começar a jogar </p>

      <div className="btnS">

        <button
          onClick={startGame}>
          <GiPlayButton size={50}
          />Começar
        </button>

      </div>

    </div>
  )
};

export default StartScreen;