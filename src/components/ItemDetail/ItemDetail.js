import React, { useState, useContext } from "react";

//Context
import { CartContext } from "../../CartContext";

//Components
import ItemCount from "../ItemCount/ItemCount";

//Styles
import { Grid, Button } from "semantic-ui-react";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [, , addItem] = useContext(CartContext);

  const onAdd = (counter) => {
    setQuantity(counter);
  };

  const handleCart = () => {
    addItem(product, quantity);
  };

  return (
    <Grid>
      <Grid.Column width={6} className="product-image">
        <img src={product.image} alt={product.name}></img>
      </Grid.Column>
      <Grid.Column width={8} className="product-detail">
        <h2>{product.name}</h2>
        <p className="company">{product.company}</p>
        <p className="price">{product.price}</p>
        <p>
          <strong>País: </strong>
          {product.country}
        </p>
        <p>
          <strong>Volumen: </strong>
          {product.volume}
        </p>
        <p>
          <strong>Estilo: </strong>
          {product.style}
        </p>
        <p>
          <strong>Descripción: </strong>
          {product.description}
        </p>
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        <Button className="add-button" primary onClick={handleCart}>
          Agregar al carrito
        </Button>
      </Grid.Column>
    </Grid>
  );
};

export default ItemDetail;
