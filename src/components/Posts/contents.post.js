import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import { Modal } from "react-bootstrap";
import Loaders from "../Utilities/loaders";

// import PopUp from "./popup.post";

const Contents = () => {
  const [postss, setPost] = useState([]);
  const [limit, setLimit] = useState(3);
  const [isiModal, setModal] = useState({});
  const [loading, setLoading] = useState(true);

  const [shows, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setPost(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const setUpButton = (a) => {
    a === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <Container style={{ marginBottom: "80px" }}>
        <Alert variant="success" style={{ boxShadow: "5PX 5PX 10PX 0px rgba(0, 0, 0, 0.8)" }}>
          <Alert.Heading>API POST</Alert.Heading>
          Currently showing {limit} posts
        </Alert>
        {/* <h1>{isiModal.title}</h1> */}
        <div style={{ width: "100%", height: "400px", overflow: "scroll" }}>
          {postss.map((data, i) => {
            return (
              <div key={i}>
                <Button
                  style={{
                    color: "primary",
                    width: "100%",
                    marginBottom: "30px",
                    boxShadow: "10PX 15PX 10PX 0px rgba(0, 0, 0, 0.8)",
                  }}
                  onClick={() => {
                    setModal(data);
                    setShow(true);
                  }}
                >
                  <h5>{data.title}</h5>
                </Button>
              </div>
            );
          })}
        </div>
        <div>
          <Modal show={shows} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h3>ID : {isiModal.id}</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6>TITLE : {isiModal.title}</h6>

              <h6>
                {" "}
                URL :{" "}
                <a href={isiModal.url} target="_blank">
                  {isiModal.url}
                </a>
              </h6>
            </Modal.Body>
          </Modal>
        </div>

        <ButtonGroup style={{ position: "fixed", left: "550px" }}>
          <Button variant="dark" size="lg" onClick={() => setUpButton("+")}>
            Tambah
          </Button>
          {limit > 1 && (
            <Button style={{ marginLeft: "10px" }} variant="dark" size="lg" onClick={() => setUpButton("-")}>
              Kurang
            </Button>
          )}
        </ButtonGroup>
      </Container>
    </React.Fragment>
  );
};

export default Contents;
