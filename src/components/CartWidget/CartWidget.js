import React, { useContext } from "react";
import { Icon, Label } from "semantic-ui-react";

//Styles
import "./CartWidget.css";

//Context
import { CartContext } from "../../CartContext";

const CartWidget = () => {
  const [items] = useContext(CartContext);

  const getTotal = () => {
    let total = 0;
    for (let item of items) {
      total = total + item.quantity;
    }
    return total;
  };

  return (
    <div className="shopping">
      <Icon link name="shopping cart" size="large" className="shopping-icon" />
      {items.length > 0 && (
        <Label circular color="red" className="cart-number">
          {getTotal()}
        </Label>
      )}
    </div>
  );
};

export default CartWidget;
