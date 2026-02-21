import React, { useState } from "react";
import "./Body.css";  // Si deseas agregar estilos personalizados
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import dojoImage from "../../assets/Dojo.png";
import kanjiImage from "../../assets/Pics/Kanji-Aikido-PNG-Image.png"
import { Link } from "react-router-dom"; // Importa Link
import DojoModal from "../DojoModal/DojoModal";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="body-container">
        <div className="left-column">
          {/* Card reemplazando el contenido de left-column */}
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={openModal}>
              <CardMedia
                component="img"
                height="140"
                image={dojoImage}
                alt="Dojo Roma"
                style={{ cursor: "pointer" }}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dojo Roma
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Conoce Nuestro Aikido Dojo, el centro de comunión en el área centro.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="#">
                Dojo Roma Site
              </Button>
              <Button size="small" color="primary" href="#">
                Únetenos
              </Button>
              <Button size="small" color="primary" onClick={openModal}>
                Ubicación
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Envolver todo el contenido en un Link */}
        <Link to="/que-es-aikido" className="middle-column">
          <img src={kanjiImage} alt="aikido-kanji" className="kanji-image" />
          <div>
            <h2>Que es Aikido?</h2>
            <p>
              El Aikido es un arte marcial que enseña y promueve la defensa mediante técnicas que utilizan el balance y equilibrio de manera fluida para transformar una agresión en un movimiento continuo. 
            </p>
            <p>Más que una práctica física, el Aikido cultiva la mente y el espíritu, promoviendo valores como la paz, la armonía y el respeto.
            </p>
            <p> No existen limitaciones de edad o género, lo que lo convierte en una disciplina accesible para todos, con su enfoque en la autodefensa sin violencia, el Aikido es ideal para quienes buscan fortalecer cuerpo y mente mientras encuentran serenidad en su vida diaria.
            </p>
          </div>
        </Link>

        <div className="right-column">
          <h3>Clases de Aikido</h3>
          <h3>Clases Especiales</h3>
        </div>
      </div>

      {/* Modal con imagen y mapa */}
      <DojoModal isOpen={isModalOpen} image={dojoImage} onClose={closeModal} />
    </>
  );
};

export default Body;

