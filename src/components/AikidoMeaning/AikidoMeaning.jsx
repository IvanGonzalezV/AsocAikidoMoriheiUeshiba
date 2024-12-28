import React from "react";
import "./AikidoMeaning.css"; // Puedes agregar estilos personalizados aquí si lo deseas.
import O from "../../assets/O-removebg.png"
import grados from "../../assets/graduacion.png"

const AikidoMeaning = () => {
  return (
    <div className="aikido-meaning-container">
    <img class="img-o" src={O} alt="O-removebg.png" />
    <div className="aikido-meaning">
      <h1>¿AIKIDO, Qué es?</h1>
      <p>
        Definición y Filosofía:
        <br />
        El Aikido, desarrollado por Morihei Ueshiba entre 1930 y 1960, es un arte marcial moderno japonés que busca la armonización con la energía vital. Su filosofía rechaza la violencia, enfocándose en la autodisciplina y el desarrollo físico, mental y espiritual, promoviendo la paz y el entendimiento mutuo. Es influenciado por el Sintoísmo, el Budismo Zen, y el Taoísmo.
      </p>

      <p>Principios Técnicos:
        <br />
        El Aikido se basa en técnicas como:

        Esquivas y desvíos: 
        <br />
        Kuzushi (desequilibrio) y Tai Sabaki (movimiento corporal).
        Proyecciones y luxaciones.
        Uso de armas tradicionales como el bastón (jo) y el sable (bokken).
        Conceptos como el Ki, o energía vital, y su flujo armonioso entre practicantes.
      </p>

      <p>
        Historia:
        <br />
        Ueshiba combinó influencias de varias artes marciales tradicionales, como el Daito Ryu Aiki-jujutsu y el Kenjutsu. En 1942 adoptó oficialmente el nombre de Aikido, y tras la Segunda Guerra Mundial, estableció su sede mundial en el Hombu Dojo en Tokio.
      </p>

      <p>
        Enfoque y Ética:
        <br />
        El Aikido no tiene competiciones ni clasificaciones por victorias. Se considera un arte marcial de la paz, donde el practicante entrena para controlar sus emociones, respetar a su oponente, y crecer tanto física como espiritualmente.
      </p>

      <p>
        En palabras de su fundador, es "el camino de la unión con el universo y la perfección infinita para la gloria de Dios".
      </p>
      
      <p>
        Sistema de Grados Aikikai
      </p>
      <br />
      <img className="grados-img" src={grados} alt="Tabla de Grados" />
    </div>
    </div>
  );
};

export default AikidoMeaning;

