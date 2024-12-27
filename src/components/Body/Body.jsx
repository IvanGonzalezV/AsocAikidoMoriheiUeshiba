import React from "react";
import "./Body.css";  // Si deseas agregar estilos personalizados
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import dojoImage from "../../assets/dojo.png";
import { Link } from "react-router-dom"; // Importa Link

const Body = () => {
  return (
    <div className="body-container">
     <div className="left-column">
        {/* Card reemplazando el contenido de left-column */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={dojoImage} // Aquí pon la imagen que quieras
              alt="Dojo Roma"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dojo Roma
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Conoce Nuestro Aikido Dojo, el centro de comunión en el área centro.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href="#">
              Dojo Roma Site
            </Button>
            <Button size="small" color="primary" href="#">
              Únetenos
            </Button>
            <Button size="small" color="primary" href="#">
              Ubicación
            </Button>
          </CardActions>
        </Card>
      </div>

      <div className="middle-column">
        <h2>Que es Aikido?</h2>
        <p>
          Aikido es el Arte Marcial creado por nuestro fundador Morihei Ueshiba
        </p>
      </div>

      <div className="right-column">
        <h3>Clases de Aikido</h3>
        <h3>Clases Especiales</h3>
      </div>
    </div>
  );
};

export default Body;
