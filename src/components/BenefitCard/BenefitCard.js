import React from "react";
import { Card, Image } from "semantic-ui-react";

//Styles
import "./BenefitCard.css";

const BenefitCard = ({ image, title, description }) => (
  <Card className="benefit-card-container">
    <Card.Content>
      <Image src={image} wrapped ui={false} />
      <Card.Header>{title}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
);

export default BenefitCard;
