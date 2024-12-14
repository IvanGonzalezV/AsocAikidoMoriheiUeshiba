import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MediaSlider.css"; // Archivo para estilos personalizados

// Importar imágenes y videos
import video1 from "../../assets/AikiVidSliderMain.mp4";
import image1 from "../../assets/Pics/Semi_00.jpg"
import image2 from "../../assets/Pics/Semi_01.jpg";
import image3 from "../../assets/Pics/Semi_03.jpg";
import image4 from "../../assets/Pics/Semi_04.jpg";

// Componente para la flecha siguiente
// Flecha siguiente
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <span className="arrow-icon">&#9654;</span> {/* Símbolo de flecha derecha */}
    </div>
  );
};

// Flecha anterior
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <span className="arrow-icon">&#9664;</span> {/* Símbolo de flecha izquierda */}
    </div>
  );
};

const MediaSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="media-slider">
      <div className="overlay left"></div> {/* Capa izquierda */}
      <div className="overlay right"></div> {/* Capa derecha */}
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Imagen 1" />
        </div>
        <div>
          <img src={image2} alt="Imagen 2" />
        </div>
        <div>
          <img src={image3} alt="Imagen 2" />
        </div>
        <div>
          <img src={image4} alt="Imagen 2" />
        </div>
        <div>
          <video controls>
            <source src={video1} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </Slider>
    </div>
  );
};

export default MediaSlider;
