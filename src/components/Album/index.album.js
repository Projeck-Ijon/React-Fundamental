//children component
import React from "react";
import { Container } from "react-bootstrap";
import Collection from "./collection.albums";

const Albums = (props) => {
  return (
    <React.Fragment>
      <Container style={{ paddingTop: "4rem" }}>
        <Collection />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
