import "./Header.css";
import logo from "../../assets/Logo_Fed.png";

const Header = () => {
  return (
    <div className="Header">
        <div className="header-text">
            <h1 id="upper">Asociacion de Aikido Morihei Ueshiba A.C.</h1>   
            <h2 id="mid">合気道守平植芝協会法人</h2>     
        </div>
       

        <ul className="nav-list">
          <li><a href="#">Que es AIKIDO?</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <li><a href="#">Nuestro Dojo</a></li>
          <li><a href="#">Contactanos</a></li>
        </ul>
        <a href="#">
        <img src={logo} alt="O Sensei" />
        </a>
    </div>
  )
}

export default Header