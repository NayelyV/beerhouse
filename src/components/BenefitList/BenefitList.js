import React from "react";

//Styles
import "./BenefitList.css";

//Images
import drink from "../../img/drink.jpeg";
import bh from "../../img/bh.jpeg";
import car from "../../img/car.jpeg";
import secure from "../../img/secure.jpeg";

//Componentes
import BenefitCard from "../BenefitCard/BenefitCard";

const BenefitList = () => {
  const benefits = [
    {
      id: 1,
      image: drink,
      title: "Selección única",
      description:
        "¡Tenemos las mejores marcas de cerveza del mundo, más de 250!",
    },
    {
      id: 2,
      image: bh,
      title: "Garantía Beerhouse",
      description: "Si tu pedido llega roto o en mal estado te lo cambiamos.",
    },
    {
      id: 3,
      image: car,
      title: "Envíos Gratis",
      description: "A partir de un 24 pack o compra de $600 tu envío es gratis",
    },
    {
      id: 4,
      image: secure,
      title: "Fácil y seguro",
      description: "Aceptamos todos los métodos de pago de forma segura.",
    },
  ];

  return (
    <div className="benefit-container">
      {benefits.map((benefit) => {
        return (
          <BenefitCard
            key={benefit.id}
            image={benefit.image}
            title={benefit.title}
            description={benefit.description}
          />
        );
      })}
    </div>
  );
};

export default BenefitList;
