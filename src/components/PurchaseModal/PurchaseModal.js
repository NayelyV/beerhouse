import React, { useContext, useState } from "react";

//Context
import { CartContext } from "../../CartContext";

//Styles
import { Modal, Button } from "semantic-ui-react";

const PurchaseModal = ({ purchase }) => {
  const [, , , , clear] = useContext(CartContext);
  const [open, setOpen] = useState(true);

  const cleanPurchase = () => {
    clear();
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      closeOnDimmerClick={false}
    >
      <Modal.Header>Compra exitosa!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <h4>Id de compra: {purchase}</h4>
          <p>En un momento llegará a tu correo tu ticket de compra</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={cleanPurchase}>
          Aceptar
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PurchaseModal;
