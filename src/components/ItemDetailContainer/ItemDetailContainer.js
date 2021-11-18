import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Styles
import './ItemDetailContainer.css'
import { Button } from "semantic-ui-react";

//Firebase
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

//Components
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ match }) => {
  let itemId = match.params.id;
  const [item, setItem] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const docs = [];
      const productsRef = doc(db, "products", itemId);
      const docSnap = await getDoc(productsRef);
      if (docSnap.exists()) {
        docs.push({ ...docSnap.data(), token: docSnap.id });
        setItem(docs);
      }
    };
    requestData();
  }, [itemId]);

  return (
    <div>
      {item.length > 0 ? (
        <div>
          {item.map((product) => {
            return (
              <ItemDetail
                key={product.productId}
                product={product}
              ></ItemDetail>
            );
          })}
        </div>
      ) : (
        <div className='empty-product'>
          <h1>No existe ese producto</h1>
          <Link to={`/`}>
            <Button primary>Buscar productos</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
