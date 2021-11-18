import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Loading = () => (
  <Dimmer active>
    <Loader size="huge" content="Cargando..." />
  </Dimmer>
);

export default Loading;
