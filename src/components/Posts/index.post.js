import React from "react";
import { Container } from "react-bootstrap";
import Contents from "./contents.post";

const Post = () => {
  return (
    <React.Fragment>
      <Container style={{ paddingTop: "5rem" }}>
        <Contents />
      </Container>
    </React.Fragment>
  );
};
export default Post;
