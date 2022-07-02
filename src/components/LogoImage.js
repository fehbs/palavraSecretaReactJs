import './LogoImg.css';
import logo from '../logo.svg'

function LogoImg() {
  return(
    <div>
      <img src={logo} className="logo" alt="logo" width="22%"/>
    </div>
  )
}

export default LogoImg;