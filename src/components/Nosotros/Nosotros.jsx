import React from "react";
import "./Nosotros.css"; // Asegúrate de que el CSS esté bien enlazado.
import nageImage from "../../assets/nage_01.png"; // Ruta de la imagen.
import japwavestyle from "../../assets/Pics/japwavestyle.jpg"; // Asegúrate de poner la extensión correcta (.jpg, .png, etc.)

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <div className="nosotros-content">
        <h1>Nuestra Asociación</h1>
        <p>
          Fundada en <strong>2006</strong> por los Sensei{" "}
          <strong>
            Alejandro Oliva Estrella (Presidente) y Araceli Hernandez Zamudio
            (Vicepresidente)
          </strong>
          , está <strong>legalmente constituida</strong> y reconocida ante
          Notario Público y por{" "}
          <strong>el Instituto del Deporte de la CDMX</strong>, afiliada
          también a la <strong>Federación Mexicana de Aikido A.C.</strong> así
          como al <strong>Aikikai Hombu Dojo en Japón</strong> por lo que{" "}
          <strong>
            todos los certificados que expedimos cuentan con validez Nacional e
            Internacional ante todas las instituciones mencionadas.
          </strong>
        </p>

        {/* Contenedor de las columnas */}
        <div className="bios">
          {/* Primera columna */}
          <div className="column">
            <img className="bios-img" src={nageImage} alt="Nage 01" />
            <ul>
              <li>Ostenta el grado de Cinta negra 6º Dan, otorgado por Japon.</li>
              <li>4º lugar a nivel Latinoamerica, mayor grado otorgado a una mujer fuera de Japon.</li>
              <li>Entrenadora deportiva certificada por el SICCED</li>
              <li>Instructora en seminarios y talleres de defensa personal al publico en general en CDMX, al personal gerencial y esposas del GRUPO COPPEL (Puebla) y distintos eventos en la CONADE</li>
              <li>Licenciada en pedagogia, psicología con maestria en Educacion</li>
            </ul>
          </div>

          {/* Segunda columna */}
          <div className="column">
            <img className="bios-img" src={nageImage} alt="Nage 01" />
            <ul>
              <li>Escuela en crecimiento: Expansión y nuevas ubicaciones</li>
              <li>Logros de la comunidad: Reconocimientos y premios obtenidos</li>
              <li>Metodología tradicional: Respeto por las raíces del Aikido</li>
              <li>Entrenamientos regulares: Cómo mantenemos la constancia</li>
              <li>Grados y cinturones: Proceso para alcanzar niveles más altos</li>
              <li>Entrenadores especializados: Instructores con experiencia</li>
              <li>Colaboraciones internacionales: Conexiones con otras escuelas</li>
              <li>Retos y desafíos: Superación dentro del Aikido</li>
              <li>Galería de imágenes: Fotos de clases y eventos</li>
              <li>Unidos por el Aikido: La comunidad como una familia</li>
            </ul>
          </div>
        </div>

        <p>
          Somos una asociación dedicada al Aikido, fundada con el propósito de
          preservar y difundir los valores de esta disciplina. Nuestro objetivo
          es promover el respeto, la armonía y el crecimiento personal a través
          de la práctica constante.
        </p>

        <p>
          Contamos con instructores certificados que siguen los principios
          establecidos por Morihei Ueshiba, fundador del Aikido. Nuestra
          comunidad está abierta a personas de todas las edades que deseen
          aprender y desarrollarse en este camino marcial.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;