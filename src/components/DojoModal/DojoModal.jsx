import React from "react";
import "./DojoModal.css";

const DojoModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  // URL del mapa de Google Maps embebido con pin en la ubicación exacta
  const mapEmbedUrl = "https://maps.google.com/maps?q=Monterrey+241,+Roma+Sur,+Cuauhtemoc,+CDMX&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Botón cerrar */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Contenedor con imagen y mapa */}
        <div className="modal-container">
          {/* Imagen centrada */}
          <div className="modal-image-section">
            <img src={image} alt="Dojo Roma" className="modal-image" />
          </div>

          {/* Mapa */}
          <div className="modal-map-section">
            <h3>Ubicación del Dojo</h3>
            <p className="dojo-address">
              Monterrey 241, Roma Sur<br />
              Cuauhtémoc, 06760<br />
              CDMX, México
            </p>
            <iframe
              className="google-map"
              src={mapEmbedUrl}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa del Dojo"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DojoModal;
