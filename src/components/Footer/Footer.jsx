import "./Footer.css";
import logo from "../../assets/ESCUDO2.png";
import { Link } from "react-router-dom"; // Se importa Link de React Router.

const Footer = () => {
  return (
    <div className="Footer">
      <a href="#">
        <img src={logo} alt="O Sensei" />
      </a>

       <ul className="Footer-list">
          <li><Link to="/que-es-aikido">Que es AIKIDO?</Link></li>
          <li><Link to="/nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/nuestro-dojo">Nuestro Dojo</Link></li>
          <li><Link to="/contactos">Contactanos</Link></li>
        </ul>
       
        <ul className="Footer-list">
          <li><Link to="/que-es-aikido">Que es AIKIDO?</Link></li>
          <li><Link to="/nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/nuestro-dojo">Nuestro Dojo</Link></li>
          <li><Link to="/contactos">Contactanos</Link></li>
        </ul>

        <ul className="Footer-list">
          <li><Link to="/que-es-aikido">Que es AIKIDO?</Link></li>
          <li><Link to="/nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/nuestro-dojo">Nuestro Dojo</Link></li>
          <li><Link to="/contactos">Contactanos</Link></li>
        </ul>

        <ul className="Footer-list">
          <li><Link to="/que-es-aikido">Que es AIKIDO?</Link></li>
          <li><Link to="/nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/nuestro-dojo">Nuestro Dojo</Link></li>
          <li><Link to="/contactos">Contactanos</Link></li>
        </ul>
        
    </div>
  )
}

export default Footer