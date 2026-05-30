import React, { useRef, useState } from "react";
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
  const sliderRef = useRef(null);
  const videoRef = useRef(null);
  const [hasVideoEnded, setHasVideoEnded] = useState(false);

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

  const handleVideoTimeUpdate = (e) => {
    const video = e.target;
    // Si el video llegó al final (dentro del 1% del tiempo total)
    if (video.duration > 0 && video.currentTime >= video.duration - 0.5) {
      if (!hasVideoEnded) {
        setHasVideoEnded(true);
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.slickNext();
            setHasVideoEnded(false);
          }
        }, 500);
      }
    }
  };

  const handleVideoEnded = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setHasVideoEnded(false);
    }
  };

  const handleBeforeChange = () => {
    // Reiniciar el video cuando se cambia de slide
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setHasVideoEnded(false);
    }
  };

  return (
    <div className="media-slider">
      <div className="overlay left"></div> {/* Capa izquierda */}
      <div className="overlay right"></div> {/* Capa derecha */}
      <Slider ref={sliderRef} {...settings} beforeChange={handleBeforeChange}>
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
        <div key="video-slide">
          <video 
            ref={videoRef}
            preload="metadata"
            controls 
            muted 
            autoPlay
            onTimeUpdate={handleVideoTimeUpdate}
            onEnded={handleVideoEnded}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              borderRadius: "8px",
              objectFit: "cover",
              display: "block"
            }}
          >
            <source src={video1} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </Slider>
    </div>
  );
};

export default MediaSlider;
