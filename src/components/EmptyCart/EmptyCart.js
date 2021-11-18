import React from "react";
import { Link } from "react-router-dom";

//Styles
import "./EmptyCart.css";
import { Button } from "semantic-ui-react";

const EmptyCart = () => {
  return (
    <div className="empty-container">
      <div className="empty-banner"></div>
      <h1>No tienes productos en tu carrito</h1>
      <Link to={`/`}>
        <Button primary>Buscar productos</Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
