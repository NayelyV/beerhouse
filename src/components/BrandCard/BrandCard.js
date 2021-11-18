import React from "react";

//Styles
import "./BrandCard.css";
import { Card } from "semantic-ui-react";

const BrandCard = ({ brand }) => {
  return (
    <div>
      <Card color="blue" image={brand.image} />
    </div>
  );
};

export default BrandCard;
