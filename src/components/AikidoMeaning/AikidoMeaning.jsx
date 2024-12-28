import React from "react";
import "./AikidoMeaning.css"; // Puedes agregar estilos personalizados aquí si lo deseas.
import O from "../../assets/O-removebg.png"

const AikidoMeaning = () => {
  return (
    <div className="aikido-meaning-container">
    <img src={O} alt="O-removebg.png" />
    <div className="aikido-meaning">
      <h1>¿Qué es AIKIDO?</h1>
      <p>
        Aikido es un arte marcial japonés que combina la defensa personal con la
        armonía. Fue creado por Morihei Ueshiba, conocido como "O Sensei". Su
        enfoque principal es la paz y la resolución de conflictos sin violencia.
      </p>
    </div>
    </div>
  );
};

export default AikidoMeaning;

