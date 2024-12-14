import React from "react";
import "./Body.css";  // Si deseas agregar estilos personalizados

const Body = () => {
  return (
    <div className="body-container">
      <div className="left-column">Columna 1 (3fr)</div>
      <div className="middle-column">Columna 2 (1fr)</div>
      <div className="right-column">Columna 3 (2fr)</div>
    </div>
  );
};

export default Body;
