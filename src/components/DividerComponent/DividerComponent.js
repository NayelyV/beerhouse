import React from "react";

//Styles
import "./DividerComponent.css";
import { Divider } from "semantic-ui-react";

const DividerComponent = ({ title }) => {
  return (
    <Divider horizontal inverted>
      <h2 className="section-title">{title}</h2>
    </Divider>
  );
};

export default DividerComponent;
