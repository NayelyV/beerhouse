import React, { useContext, useState } from "react";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

//Formik
import { useFormik } from "formik";

//Yup
import * as Yup from "yup";

//Styles
import "./Checkout.css";
import { Button, Form, Table, Image, Header } from "semantic-ui-react";

//Context
import { CartContext } from "../../CartContext";

//Components
import EmptyCart from "../EmptyCart/EmptyCart";
import Loading from "../Loading/Loading";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

const Cart = () => {
  const [items, , , removeItem] = useContext(CartContext);
  const [purchase, setPurchase] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (item) => {
    removeItem(item.productId);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      repeatEmail: "",
    },
    onSubmit: (data) => {
      registryPurchase(data.name, data.phone, data.email);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Es necesario que ingreses tu nombre"),
      phone: Yup.string()
        .required("Es necesario que ingreses tu teléfono")
        .min(8),
      email: Yup.string()
        .email("Ingresa un email válido")
        .required("Es necesario que ingreses tu email")
        .oneOf([Yup.ref("repeatEmail")], "No coinciden los correos"),
      repeatEmail: Yup.string()
        .email("Ingresa un email válido")
        .required("Es necesario que ingreses tu email")
        .oneOf([Yup.ref("email")], "No coinciden los correos"),
    }),
  });

  const getTotal = () => {
    let total = 0;
    for (let item of items) {
      total = total + item.quantity * item.priceNumber;
    }
    return total;
  };

  const registryPurchase = async (name, phone, email) => {
    setIsLoading(true);
    const docRef = await addDoc(collection(db, "purchases"), {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      items: items,
      date: new Date(),
      total: getTotal(),
    });
    setIsLoading(false);
    setPurchase(docRef.id);
  };

  return (
    <div className="cart-container">
      {isLoading && <Loading></Loading>}

      {purchase && <PurchaseModal purchase={purchase}></PurchaseModal>}

      {items.length > 0 ? (
        <div className="table-container">
          <Table celled color="blue" textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Cerveza</Table.HeaderCell>
                <Table.HeaderCell>Cantidad</Table.HeaderCell>
                <Table.HeaderCell>Precio</Table.HeaderCell>
                <Table.HeaderCell>Acciones</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map((item) => {
                return (
                  <Table.Row key={item.productId}>
                    <Table.Cell>
                      <div className="beer-container">
                        <Image size="mini" src={item.image} />
                        <p>{item.name}</p>
                      </div>
                    </Table.Cell>
                    <Table.Cell singleLine>{item.quantity}</Table.Cell>
                    <Table.Cell singleLine>{item.price}</Table.Cell>
                    <Table.Cell>
                      <Button
                        circular
                        icon="trash alternate outline"
                        onClick={() => handleDelete(item)}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="4">
                  <Header as="h2" textAlign="right">
                    Total: ${getTotal()} MXN
                  </Header>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      ) : (
        <EmptyCart></EmptyCart>
      )}

      {items.length > 0 ? (
        <div className="form-container">
          <h2 className="form-title">Ingresa tus datos de compra</h2>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Input
              error={formik.errors.name}
              label="Nombre"
              placeholder="Ingresa tu nombre"
              name="name"
              onChange={formik.handleChange}
            />

            <Form.Input
              error={formik.errors.phone}
              fluid
              label="Teléfono"
              placeholder="Ingresa tu teléfono"
              name="phone"
              onChange={formik.handleChange}
            />

            <Form.Input
              error={formik.errors.email}
              fluid
              label="Email"
              placeholder="Ingresa tu email"
              name="email"
              onChange={formik.handleChange}
            />

            <Form.Input
              error={formik.errors.repeatEmail}
              fluid
              label="Repetir email"
              placeholder="Repite tu email"
              name="repeatEmail"
              onChange={formik.handleChange}
            />

            <Button primary type="submit">
              Terminar de comprar
            </Button>
          </Form>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
