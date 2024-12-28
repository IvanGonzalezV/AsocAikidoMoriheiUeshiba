import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Se agregaron estas líneas para manejar rutas.
import "./App.css";
 
//COMPONENTS

import NavBar from "./components/NavBar/NavBar";
import MediaSlider from "./components/MediaSlider/MediaSlider";
import Body from "./components/Body/Body";
import AikidoMeaning from "./components/AikidoMeaning/AikidoMeaning"; // Se agregó el nuevo componente.

const name = "AsocMoriheiUeshiba"

const App = () => {
  return(
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<><MediaSlider /><Body /></>} />
        {/* Nueva ruta para la página "¿Qué es AIKIDO?" */}
        <Route path="/que-es-aikido" element={<AikidoMeaning />} />
        </Routes>
      </div>
    </Router>  
    )
  }

export default App;
