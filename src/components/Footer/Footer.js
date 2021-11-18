import React from "react";
import logo from "../../img/logo-white.png";

//Styles
import "./Footer.css";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={logo} className="footer-logo" alt="beerhouse logo" />
      <div>
        <h5>Acerca de Beerhouse</h5>
        <p>Términos y condiciones</p>
        <p>Política de privacidad</p>
      </div>

      <div>
        <h5>Nuestras redes sociales</h5>
        <Icon link name="facebook f" circular size="large" />
        <Icon link name="twitter" circular size="large" />
        <Icon link name="instagram" circular size="large" />
      </div>

      <div>
        <h5>Ayuda</h5>
        <p>Información de pedidos</p>
        <p>Preguntas frecuentes</p>
      </div>
    </div>
  );
};

export default Footer;
