import React, { useState, useEffect } from "react";

//Firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

//Styles
import "./ItemListContainer.css";

//Components
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import Banner from "../Banner/Banner";
import BenefitList from "../BenefitList/BenefitList";
import DividerComponent from "../DividerComponent/DividerComponent";
import BrandList from "../BrandList/BrandList";
import Footer from "../Footer/Footer";

const ItemListContainer = ({ match }) => {
  let categoryDescription = match.params.id;

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const requestData = async () => {
      const docs = [];
      const productsRef = collection(db, "products");
      const search = categoryDescription
        ? query(
            productsRef,
            where("categoryDescription", "==", categoryDescription)
          )
        : productsRef;
      const items = await getDocs(search);
      setIsLoading(false);
      items.forEach((doc) => {
        docs.push({ ...doc.data(), token: doc.id });
      });

      setProducts(docs);
    };
    requestData();
  }, [categoryDescription]);

  return (
    <div className="container">
      {isLoading && <Loading></Loading>}
      {categoryDescription ? (
        <DividerComponent title={categoryDescription}></DividerComponent>
      ) : (
        <div className="home-container">
          <Banner></Banner>
          <BenefitList></BenefitList>
          <DividerComponent title="Novedades"></DividerComponent>
        </div>
      )}
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <h1 className="title">No hay productos para esta categoría</h1>
      )}
      <BrandList></BrandList>
      <Footer></Footer>
    </div>
  );
};

export default ItemListContainer;
