import React, { useState, useEffect } from "react";

//Styles
import "./BrandList.css";

//Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

//Components
import DividerComponent from "../DividerComponent/DividerComponent";
import BrandCard from "../BrandCard/BrandCard";
import Loading from "../Loading/Loading";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const requestData = async () => {
      const docs = [];
      const brandsRef = collection(db, "brands");
      const items = await getDocs(brandsRef);
      setIsLoading(false);
      items.forEach((doc) => {
        docs.push({ ...doc.data(), token: doc.id });
      });

      setBrands(docs);
    };
    requestData();
  }, []);

  return (
    <div className="brands-container">
      <DividerComponent title="Nuestras marcas"></DividerComponent>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="brands-card-container">
          {brands.map((brand) => {
            return <BrandCard key={brand.brandId} brand={brand}></BrandCard>;
          })}
        </div>
      )}
    </div>
  );
};

export default BrandList;
