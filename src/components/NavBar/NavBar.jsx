import "./NavBar.css";
import logo from "../../assets/ESCUDO2.png";
import { Link } from "react-router-dom"; // Se importa Link de React Router.

const NavBar = () => {
  return (
    <div className="NavBar">
        <div className="NavBar-text">
          <Link to="/" id="upper">  {/* Enlace hacia la ruta principal */}
            <h1 id="upper">Asociacion de Aikido Morihei Ueshiba A.C.</h1> 
          </Link>  
            <h2 id="mid">合気道守平植芝協会法人</h2>     
        </div>
       

        <ul className="nav-list">
          <li><Link to="/que-es-aikido">Que es AIKIDO?</Link></li>
          <li><Link to="Nosotros">Sobre Nosotros</Link></li>
          <li><a href="#">Nuestro Dojo</a></li>
          <li><a href="#">Contactanos</a></li>
        </ul>
        <a href="#">
        <img src={logo} alt="O Sensei" />
        </a>
    </div>
  )
}

export default NavBar