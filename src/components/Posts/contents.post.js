import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { Modal } from "react-bootstrap";

// import PopUp from "./popup.post";

const Contents = () => {
  const [postss, setPost] = useState([]);
  const [limit, setLimit] = useState(3);
  const [isiModal, setModal] = useState({});

  const [shows, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
    }).then((result) => setPost(result.data));
  }, [limit]);

  const setUpButton = (a) => {
    a === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
  };

  return (
    <React.Fragment>
      <Container>
        <Button style={{ marginLeft: "10px", boxShadow: "10PX 15PX 10PX 0px rgba(0, 0, 0, 0.8)" }} variant="success" size="lg" onClick={() => setUpButton("+")}>
          Tambah
        </Button>
        {limit > 1 && (
          <Button style={{ marginLeft: "10px", boxShadow: "10PX 15PX 10PX 0px rgba(0, 0, 0, 0.8)" }} variant="success" size="lg" onClick={() => setUpButton("-")}>
            Kurang
          </Button>
        )}

        {/* <h1>{isiModal.title}</h1> */}
        {postss.map((data, i) => {
          return (
            <div key={i}>
              <Button
                style={{
                  color: "primary",
                  width: "100%",
                  marginTop: "30px",
                  boxShadow: "10PX 15PX 10PX 0px rgba(0, 0, 0, 0.8)",
                }}
                onClick={() => {
                  setModal(data);
                  setShow(true);
                }}
              >
                <h2>{data.title}</h2>
              </Button>
            </div>
          );
        })}
        <Modal show={shows} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ID :{isiModal.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            TITLE : {isiModal.title}
            <br />
            URL : {isiModal.url}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </React.Fragment>
  );
};

export default Contents;
