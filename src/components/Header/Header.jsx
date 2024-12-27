import "./Header.css";
import logo from "../../assets/ESCUDO2.png";
import { Link } from "react-router-dom"; // Se importa Link de React Router.

const Header = () => {
  return (
    <div className="Header">
        <div className="header-text">
          <Link to="/" id="upper">  {/* Enlace hacia la ruta principal */}
            <h1 id="upper">Asociacion de Aikido Morihei Ueshiba A.C.</h1> 
          </Link>  
            <h2 id="mid">合気道守平植芝協会法人</h2>     
        </div>
       

        <ul className="nav-list">
          <li><Link to="/que-es-aikido">Que es AIKIDO?</Link></li>
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